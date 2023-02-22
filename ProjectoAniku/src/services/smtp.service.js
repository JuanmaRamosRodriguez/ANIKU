const nodemailer = require('nodemailer');
const { logger } = require('../utils');
const { smtp: config } = require('../config');

async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: '127.0.0.1',
    port: 1025,
    secure: false,
  });

  const info = await transporter.sendMail({
    from: 'its@me.com',
    to: 'cualquiera@gmail.es',
    subject: 'Mensaje para probar',
    text: 'Texto',
    html: "<h1 style='color: red'>Página HTML</h1>",
  });
  console.log('Message sent: %s', info.messageId);
}
module.emports = {
  sendMail,
  nodemailer,
};
