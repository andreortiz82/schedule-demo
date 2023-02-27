const nodemailer = require("nodemailer");
const cron = require("node-cron");

function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hello@andreortiz.com",
      pass: process.env.CUSTOM_GPASS,
    },
  });

  const mailOptions = {
    from: "hello@andreortiz.com",
    to: "hello@andreortiz.com",
    subject: "Test Email (heroku)",
    text: "This is a test email from heroku nodejs",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// cron.schedule("0 */6 * * *", () => {
//   sendEmail();
// });

// cron.schedule("*/1 * * * *", () => {
//   sendEmail();
// });
