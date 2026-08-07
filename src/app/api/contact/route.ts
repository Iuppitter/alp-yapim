import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FORWARD_TO = process.env.FORWARDING_EMAIL || 'alpyapim@gmail.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Lütfen gerekli tüm alanları doldurun." }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Web İletişim Formu <info@alp-yapim.com>',
            to: [FORWARD_TO],
            replyTo: email, // Bu sayede gmail'de 'Yanıtla'ya basılınca direkt müşteriye yazar
            subject: `Siteden Yeni Mesaj: ${subject || 'Konu Belirtilmemiş'}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
                    <h2 style="margin-bottom: 20px;">Web Sitenizden Yeni Bir İletişim Talebi</h2>
                    <p><strong>Gönderen:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
                    <p><strong>Konu:</strong> ${subject || 'Belirtilmedi'}</p>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                    <p style="white-space: pre-wrap; font-size: 15px;">${message}</p>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (err) {
        return NextResponse.json({ error: 'Mail altyapısında sorun oluştu.' }, { status: 500 });
    }
}
