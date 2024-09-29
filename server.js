const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Ensure you're using a .env file for sensitive information

const app = express();

// Use CORS and specify allowed origins (replace with your actual frontend URLs)
const allowedOrigins = ['*', 'https://oumadavid.github.io/myPortfolioWebsite/']; // Add any other frontend domains here

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  // Validate the required fields
  if (!name || !email || !message) {
    return res.status(400).send({ error: 'Name, email, and message are required.' });
  }

  // Create the transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Email stored in .env file
      pass: process.env.EMAIL_PASS,  // Email password stored in .env file
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email stored in .env
    subject: subject || 'New Contact Message',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error while sending email:', error);
      return res.status(500).send({ error: 'Failed to send email', details: error.message });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send({ success: 'Email sent successfully!' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
