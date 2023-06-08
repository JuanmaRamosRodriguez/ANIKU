const express = require('express');
const cors = require('cors');
const loaders = require('./loaders');
const config = require('./config');

const app = express();
app.use(cors());
loaders.init(app, config);

module.exports = app;
