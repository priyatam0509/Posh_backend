const nodemailer = require("nodemailer");
// smtp-Mail.outlook.com 587
const sendEmail = async (subject, message, send_to, sent_from, reply_to, attachments =[]) => {
  const transporter = nodemailer.createTransport({
  service: 'gmail',
    // host: process.env.EMAIL_HOST,
    // port: "465",
  host: 'smtp.gmail.com',
  // host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
    attachments:attachments
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;