import nodemailer from 'nodemailer';
import dns from 'dns/promises';

async function isEmailValid(email: string): Promise<boolean> {
    const domain = email.split('@')[1];
    if (!domain) return false;
    try {
        const records = await dns.resolveMx(domain);
        if (records.length === 0) return false;
    } catch {
        return false;
    }
    try {
        const res = await fetch(
            `https://emailreputation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=${encodeURIComponent(email)}`
        );
        const data = await res.json();
        const status = data.email_deliverability?.status;
        return status === 'deliverable' || status === 'unknown';
    } catch {
        return false;
    }
}

export async function POST(req:any) {
    try {
        const { name, email, subject, message } = await req.json();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || !(await isEmailValid(email))) {
            return new Response(JSON.stringify({ error: "Invalid or non-existent email address" }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name} via Portfolio" <${process.env.EMAIL_USER}>`,
            to: "hajar.aitabdielmomin@gmail.com",
            replyTo: `"${name}" <${email}>`,
            subject: subject || "New Message from Contact Form",
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), {
            status: 500,
        });
    }
}