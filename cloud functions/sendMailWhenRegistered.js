const nodemailer = require('nodemailer');

// 配置Nodemailer使用QQ邮箱发送邮件
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465, // SMTP服务端口号
    secure: true, // 使用SSL
    auth: {
        user: '944989026@qq.com', // 填写您的QQ邮箱
        pass: 'qixiimerghhhbcga', // 填写您的QQ邮箱授权码
    },
});

// 发送邮件的函数
const sendEmail = (to, subject, text, html) => {
    const mailOptions = {
        from: '944989026@qq.com',
        to,
        subject,
        text,
        html,
    };

    return transporter.sendMail(mailOptions);
};

// 云函数入口
exports.handler = async function(event, context) {
    const { email, username } = event; // 假设事件对象中包含用户邮箱和用户名

    try {
        // 发送欢迎邮件
        await sendEmail(email, '欢迎注册', '感谢您的注册，' + username, '<p>感谢您的注册，<strong>' + username + '</strong></p>');
        console.log('邮件发送成功');
    } catch (error) {
        console.error('邮件发送失败:', error);
        throw error;
    }
};