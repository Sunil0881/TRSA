const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "satisfyy07@gmail.com",
    pass: "mmlw ewoq etmu lzas", // Use App Password or regular password (if less secure apps are enabled)
  },
});

async function sendEmail(formEmail, subject, html, cc) {
  const mailOptions = {
    from: "satisfyy07@gmail.com", // Email from the form
    to: formEmail, // Always send to satisfyy07@gmail.com
    cc: cc,
    subject: subject,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
  }
}

module.exports = { sendEmail };
