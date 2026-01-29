import nodemailer from 'nodemailer';
import { feedbackEmailTemplate } from './EmailTemplate.js';

export const AddFeedback = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required", success: false });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
            pool: true,
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Feedback: ${subject}`,
            html: feedbackEmailTemplate(name, email, subject, message)
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailErr) {
            console.log("Error sending email:", emailErr);
        }

            res.status(201).json({ message: 'Mail send successfully', success: true });
    } catch (error) {
        console.log("Error adding feedback:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};