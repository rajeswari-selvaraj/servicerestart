const nodemailer = require("nodemailer");
const { errorHandle } = require("./ErrorFiles/errorHandler");

require("dotenv").config();
const email = process.env.Email_user;
const pass = process.env.Email_pass;

exports.sendMail = (mailId, content) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use SSL
    auth: {
      user: email,
      pass: pass,
    },
    tls: {
      // Allow self-signed certificates
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'no-reply@example.com',
    to: mailId,
    subject: "Sending Email using Node.js",
    text: "click here to verify your mail:"+content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      errorHandle(error);
      console.log("error:" + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
