require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { OAuth2 } = google.auth;

const port = process.env.PORT;

const mongodb = {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_NAME,
};

const smtp = {
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  clientId: process.env.GMAIL_CLIENT_ID,
  accessToken: process.env.GMAIL_ACCESS_TOKEN,
  authUrl: 'https://developers.google.com/oauthplayground',
};

module.exports = {
  port,
  mongodb,
  smtp,
  OAuth2,
};
