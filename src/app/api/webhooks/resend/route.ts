import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FORWARD_TO = process.env.FORWARDING_EMAIL || 'muratcan.akyol739@gmail.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Resend Inbound Webhook: body.type = "email.received", body.data = metadata only
        const eventData = body.data || body;

        const from = eventData.from || 'Bilinmiyor';
        const to = eventData.to || eventData.received_for || 'Bilinmiyor';
        const subject = eventData.subject || 'Konu Belirtilmemiş';
        const emailId = eventData.email_id;

        let text = '';
        let html = '';

        // Resend webhook DOES NOT include email body.
        // We MUST fetch it via the Receiving API using email_id.
        if (emailId) {
            try {
                const response = await fetch(`https://api.resend.com/emails/${emailId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const emailData = await response.json();
                    text = emailData.text || '';
                    html = emailData.html || '';
                }
            } catch (fetchErr) {
                // API fetch failed, continue with empty body
            }
        }

        // Forward the email to the personal inbox
        const { data, error } = await resend.emails.send({
            from: 'Sistem Yönlendirici <info@alp-yapim.com>',
            to: [FORWARD_TO],
            subject: `[YÖNLENDİRİLEN] ${subject}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; padding: 20px; text-align: left;">
                    <p style="font-size: 14px; color: #555; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
                        <strong>Bu mesaj info@alp-yapim.com adresinize geldi ve otomatik yönlendirildi.</strong><br/><br/>
                        <strong>Asıl Gönderen:</strong> ${from}<br/>
                        <strong>Kime Atıldı:</strong> ${Array.isArray(to) ? to.join(', ') : to}<br/>
                        <strong>Konu:</strong> ${subject}
                    </p>
                    <div style="padding-top: 20px;">
                        ${html ? html : text ? `<p style="white-space: pre-wrap;">${text}</p>` : `<p style="color: #999; font-style: italic;">E-posta gövdesi okunamadı.</p>`}
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
