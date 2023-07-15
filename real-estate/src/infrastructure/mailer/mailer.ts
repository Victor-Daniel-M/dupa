import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: 'user',
    pass: 'pass',
  },
});

export async function sendLoginEmail(email: string) {
  // const mailOptions = {
  //   from: 'info@example.com',
  //   to: email.value,
  //   subject: 'Welcome to our application',
  //   text: 'You have logged in',
  // };

  // await transporter.sendMail(mailOptions);

  console.log('Sent Email');
}
