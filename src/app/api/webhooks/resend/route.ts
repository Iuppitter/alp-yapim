import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// Varsayılan olarak formlar ve yönlendirmeler bu adrese düşecek.
const FORWARD_TO = process.env.FORWARDING_EMAIL || 'muratcan.akyol739@gmail.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Resend Inbound Webhook Payload is nested inside 'data'
        const eventData = body.data || body; // Fallback to body in case it's flat

        const from = eventData.from || 'Bilinmiyor';
        const to = eventData.to || 'Bilinmiyor';
        const subject = eventData.subject || 'Konu Belirtilmemiş';
        const text = eventData.text || eventData.text_body || eventData.body || '';
        const html = eventData.html || eventData.html_body || '';

        // Gelen maili yakalayıp kişisel maile 'info@alp-yapim.com' kimliğiyle paslamak
        const { data, error } = await resend.emails.send({
            from: 'Sistem Yönlendirici <info@alp-yapim.com>',
            to: [FORWARD_TO],
            subject: `[YÖNLENDİRİLEN] ${subject}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; padding: 20px; text-align: left;">
                    <p style="font-size: 14px; color: #555; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
                        <strong>Bu mesaj info@alp-yapim.com adresinize geldi ve otomatik yönlendirildi.</strong><br/><br/>
                        <strong>Asıl Gönderen:</strong> ${from}<br/>
                        <strong>Kime Atıldı:</strong> ${to}
                    </p>
                    <div style="padding-top: 20px;">
                        ${html ? html : text ? `<p style="white-space: pre-wrap;">${text}</p>` : `<div style="background:#f4f4f4; padding:10px;"><p><strong>Detaylı İçerik (Ham Veri):</strong></p><pre style="white-space: pre-wrap; font-size:10px; max-width: 100%; overflow-x: auto;">${JSON.stringify(eventData, null, 2)}</pre></div>`}
                    </div>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (err) {
        return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
    }
}
