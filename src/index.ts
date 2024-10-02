import { env } from '@config';
import { setup } from '@server';
import { logger } from '@logger';

// Initialize web server
const webServer = await setup();

try {
  await webServer.listen({ host: env.WEB_SERVER_HOST, port: env.WEB_SERVER_PORT });
  logger.info(`server listening on http://${env.WEB_SERVER_HOST}:${env.WEB_SERVER_PORT}`);
  if (env.NODE_ENV === 'development') {
    logger.info(`api docs available on http://${env.WEB_SERVER_HOST}:${env.WEB_SERVER_PORT}/docs`);
  }
} catch (error) {
  logger.error(error);
  process.exit(1);
}
