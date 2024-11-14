const nodemailer = require('nodemailer');

// 从环境变量中获取邮箱信息
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// 创建邮件发送者
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465, // SMTP服务端口号
    secure: true, // 使用SSL
    auth: {
        user: emailUser, // 您的QQ邮箱
        pass: emailPass, // 您的QQ邮箱授权码
    },
});

// 发送邮件的函数
const sendEmail = (to, subject, text, html) => {
    const mailOptions = {
        from: emailUser,
        to,
        subject,
        text,
        html,
    };

    return transporter.sendMail(mailOptions);
};

exports.handler = async (event, context) => {
    console.log('Received event:', event);

    // 解析请求体中的JSON数据
    const { email } = JSON.parse(event.body);

    if (!email) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Email address is required' }),
        };
    }

    try {
        // 发送测试邮件
        await sendEmail(email, 'Test Email', 'This is a test email from our cloud function.', '<p>This is a test email from our cloud function.</p>');

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};