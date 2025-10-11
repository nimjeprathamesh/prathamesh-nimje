// backend\controller\FeedbackController.js
import db from "../db/db.js";
import nodemailer from 'nodemailer';

export const AddFeedback = async (req, res) => {
    const { name, email, subject, message } = req.body;
    const sql = `INSERT INTO feedback (name, email, subject, message) VALUES (?, ?, ?, ?)`;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required", success: false });
    }

    try {
        db.query(sql, [name, email, subject, message], async (err, result) => {
            if (err) {
                console.log("Error adding feedback:", err);
                return res.status(500).json({ message: 'Server error', success: false });
            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
                pool: true,
            });

            const mailOptions = {
                from: `"${name}" <${email}>`,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: subject,
                html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `
            };

            try {
                await transporter.sendMail(mailOptions);
            } catch (emailErr) {
                console.log("Error sending email:", emailErr);
            }

            res.status(201).json({ message: 'Mail send successfully', success: true });
        });
    } catch (error) {
        console.log("Error adding feedback:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};