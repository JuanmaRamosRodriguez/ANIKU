const port = 3000;
// eslint-disable-next-line no-use-before-define
const user = user;
// eslint-disable-next-line no-use-before-define
const pass = pass;
// eslint-disable-next-line no-use-before-define
const host = host;
// eslint-disable-next-line no-use-before-define
const dbName = dbName;
// eslint-disable-next-line no-use-before-define
const app = app;

module.exports = {
  port,
};

const mongodb = {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_NAME,
};

const config = {
  app,
  mongodb,
};

module.exports = config;
