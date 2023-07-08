import nodemailer from 'nodemailer';
import { EMAIL, EMAIL_PASSWORD } from '../config';
import { MailOptions } from '../interfaces/mail';
const sendEmail = async ({ to, subject, text, message }: MailOptions) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: `${EMAIL}`,
      pass: `${EMAIL_PASSWORD}`,
    },
  });

  const mailOptions = {
    from: `${EMAIL}`,
    to,
    subject,
    text,
    html: message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
