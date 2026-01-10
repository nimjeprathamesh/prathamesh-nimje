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
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: `New Feedback: ${subject}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: linear-gradient(135deg, #448EEB, #2243F0); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                            <h1 style="color: white; margin: 0;">New Feedback Received</h1>
                        </div>
                        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">You have received new feedback from your website:</p>
                            
                            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #2243F0;">
                                <p style="margin: 0; font-size: 14px; color: #666;">From:</p>
                                <p style="margin: 5px 0 0 0; font-size: 16px; color: #333; font-weight: bold;">${name}</p>
                            </div>

                            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #2243F0;">
                                <p style="margin: 0; font-size: 14px; color: #666;">Email:</p>
                                <p style="margin: 5px 0 0 0; font-size: 16px; color: #333; font-weight: bold;">${email}</p>
                            </div>

                            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #2243F0;">
                                <p style="margin: 0; font-size: 14px; color: #666;">Subject:</p>
                                <p style="margin: 5px 0 0 0; font-size: 16px; color: #333; font-weight: bold;">${subject}</p>
                            </div>

                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2243F0;">
                                <p style="margin: 0; font-size: 14px; color: #666;">Message:</p>
                                <p style="margin: 10px 0 0 0; font-size: 16px; color: #333; line-height: 1.6;">${message}</p>
                            </div>

                            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                            <p style="font-size: 12px; color: #999; text-align: center;">This is an automated email from yout portfolio.</p>
                            <p style="font-size: 12px; color: #999; text-align: center;">Reply directly to this email to respond to ${name}</p>
                        </div>
                    </div>
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