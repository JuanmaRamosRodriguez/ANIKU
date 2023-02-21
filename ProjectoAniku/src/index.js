const server = require('./app');
const config = require('./config');
const { logger } = require('./utils');

const { port } = config;

server.listen(port, () => {
  logger.info(`Entrando por el puerto: ${port}`);
});
