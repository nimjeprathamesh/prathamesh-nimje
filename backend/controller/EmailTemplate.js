export const feedbackEmailTemplate = (name, email, subject, message) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Feedback</title>
            <style>
                /* Email Template Styles */
                
                /* Body and Container */
                .email-body {
                    margin: 0;
                    padding: 0;
                    background-color: #f4f7fa;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                }

                .email-wrapper {
                    width: 100%;
                    border-collapse: collapse;
                    background-color: #f4f7fa;
                    padding: 40px 0;
                }

                .email-container {
                    width: 600px;
                    max-width: 100%;
                    border-collapse: collapse;
                    background-color: #ffffff;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.05);
                }

                /* Header Styles */
                .email-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 0;
                    position: relative;
                }

                .header-content {
                    padding: 40px 30px;
                    text-align: center;
                }

                .icon-container {
                    background-color: rgba(255, 255, 255, 0.2);
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin: 0 auto 20px;
                    line-height: 5.5rem;
                    backdrop-filter: blur(10px);
                }

                .an1 {
                    height: 2rem;
                    width: 2rem;
                }

                .header-title {
                    color: #ffffff;
                    margin: 0;
                    font-size: 28px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }

                .header-subtitle {
                    color: rgba(255, 255, 255, 0.9);
                    margin: 8px 0 0 0;
                    font-size: 15px;
                    font-weight: 400;
                }

                /* Content Area */
                .email-content {
                    padding: 40px 30px;
                }

                /* Sender Info Card */
                .sender-card {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }

                .sender-card-inner {
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    padding: 25px;
                    border-radius: 12px;
                }

                .sender-row {
                    display: flex;
                    align-items: center;
                }

                .avatar-cell {
                    width: 60px;
                    vertical-align: top;
                }

                .avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 50px;
                    text-align: center;
                }

                .sender-info {
                    vertical-align: top;
                    padding-left: 15px;
                }

                .sender-name {
                    margin: 0 0 4px 0;
                    font-size: 20px;
                    font-weight: 700;
                    color: #1a202c;
                }

                .sender-email {
                    color: #667eea;
                    text-decoration: none;
                    font-size: 15px;
                    font-weight: 500;
                }

                /* Subject Section */
                .subject-section {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }

                .subject-container {
                    background-color: #f8fafc;
                    padding: 20px 25px;
                    border-radius: 12px;
                    border-left: 4px solid #667eea;
                }

                .label {
                    margin: 0 0 6px 0;
                    font-size: 12px;
                    font-weight: 600;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .subject-text {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1e293b;
                }

                /* Message Section */
                .message-section {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                }

                .message-container {
                    background-color: #ffffff;
                    padding: 25px;
                    border-radius: 12px;
                    border: 2px solid #e2e8f0;
                }

                .message-text {
                    margin: 0;
                    font-size: 16px;
                    color: #334155;
                    line-height: 1.7;
                    white-space: pre-wrap;
                }

                /* Action Button */
                .action-section {
                    width: 100%;
                    border-collapse: collapse;
                }

                .button-cell {
                    text-align: center;
                    padding: 10px 0;
                }

                .reply-button {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #ffffff !important;
                    text-decoration: none;
                    padding: 16px 40px;
                    border-radius: 10px;
                    font-size: 16px;
                    font-weight: 600;
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                    transition: all 0.3s ease;
                }

                /* Footer */
                .email-footer {
                    background-color: #f8fafc;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #e2e8f0;
                }

                .footer-text {
                    margin: 0 0 8px 0;
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.6;
                }

                .footer-copyright {
                    margin: 0;
                    font-size: 12px;
                    color: #94a3b8;
                }
            </style>
        </head>
        <body class="email-body">
            <table role="presentation" class="email-wrapper">
                <tr>
                    <td align="center" style="padding: 0;">
                        <table role="presentation" class="email-container">
                            
                            <!-- Header with gradient -->
                            <tr>
                                <td class="email-header">
                                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td class="header-content">
                                                <div class="icon-container">
                                                    <img data-emoji="✉️" class="an1" alt="✉️" aria-label="✉️" draggable="false" src="https://fonts.gstatic.com/s/e/notoemoji/16.0/2709_fe0f/32.png" loading="lazy">
                                                </div>
                                                <h1 class="header-title">New Feedback</h1>
                                                <p class="header-subtitle">You've received a message from your portfolio</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <!-- Content -->
                            <tr>
                                <td class="email-content">
                                    
                                    <!-- Sender Info Card -->
                                    <table role="presentation" class="sender-card">
                                        <tr>
                                            <td class="sender-card-inner">
                                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                    <tr class="sender-row">
                                                        <td class="avatar-cell">
                                                            <div class="avatar">
                                                                ${name.charAt(0).toUpperCase()}
                                                            </div>
                                                        </td>
                                                        <td class="sender-info">
                                                            <p class="sender-name">${name}</p>
                                                            <a href="mailto:${email}" class="sender-email">${email}</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>

                                    <!-- Subject -->
                                    <table role="presentation" class="subject-section">
                                        <tr>
                                            <td class="subject-container">
                                                <p class="label">Subject</p>
                                                <p class="subject-text">${subject}</p>
                                            </td>
                                        </tr>
                                    </table>

                                    <!-- Message -->
                                    <table role="presentation" class="message-section">
                                        <tr>
                                            <td class="message-container">
                                                <p class="label">Message</p>
                                                <p class="message-text">${message}</p>
                                            </td>
                                        </tr>
                                    </table>

                                    <!-- Action Button -->
                                    <table role="presentation" class="action-section">
                                        <tr>
                                            <td class="button-cell">
                                                <a href="mailto:${email}" class="reply-button">
                                                    Reply to ${name.split(' ')[0]}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td class="email-footer">
                                    <p class="footer-text">
                                        This is an automated notification from your portfolio website
                                    </p>
                                    <p class="footer-copyright">
                                        © ${new Date().getFullYear()} Your Portfolio. All rights reserved.
                                    </p>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
};