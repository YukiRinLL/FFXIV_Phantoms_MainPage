const net = require('net');

// 发送邮件的函数
function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    const smtpClient = net.createConnection({
      host: 'smtp.qq.com',
      port: 465
    });

    smtpClient.on('connect', () => {
      smtpClient.write('HELO smtp.qq.com\r\n');
    });

    smtpClient.on('data', (chunk) => {
      console.log('Server said:', chunk.toString());
      if (chunk.toString().includes('235')) {
        smtpClient.write('MAIL FROM:<' + process.env.EMAIL_USER + '>\r\n');
      } else if (chunk.toString().includes('250')) {
        smtpClient.write('RCPT TO:<' + email + '>\r\n');
      } else if (chunk.toString().includes('250')) {
        smtpClient.write('DATA\r\n');
      } else if (chunk.toString().includes('354')) {
        smtpClient.write('Subject: ' + subject + '\r\n');
        smtpClient.write('To: ' + email + '\r\n');
        smtpClient.write('From: ' + process.env.EMAIL_USER + '\r\n');
        smtpClient.write('\r\n');
        smtpClient.write(body + '\r\n');
        smtpClient.write('\r\n.\r\n');
      } else if (chunk.toString().includes('250')) {
        smtpClient.write('QUIT\r\n');
        resolve();
      }
    });

    smtpClient.on('end', () => {
      console.log('SMTP connection closed');
    });

    smtpClient.on('error', (error) => {
      console.error('SMTP error:', error);
      reject(error);
    });

    smtpClient.on('timeout', () => {
      console.error('SMTP connection timed out');
      smtpClient.destroy();
      reject(new Error('SMTP connection timed out'));
    });
  });
}

// 云函数入口
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
    const subject = 'Test Email from Cloud Function';
    const body = 'This is a test email sent from a cloud function using QQ email service.';
    await sendEmail(email, subject, body);

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