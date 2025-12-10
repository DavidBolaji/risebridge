
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
   host: "smtp.zoho.com",
  port: 465,
  secure: true, // must be true for 465
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const startMailServer = () => {
  transporter.verify((error, success) => {
    if (error) {
      console.log("Mail server error:", error);
    } else {
      console.log("Mail server is ready to send messages");
    }
  });
};
