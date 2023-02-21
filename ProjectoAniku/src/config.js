require('dotenv').config();

const port = process.env.PORT;

const mongodb = {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_NAME,
};

module.exports = {
  port,
  mongodb,
};
