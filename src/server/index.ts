import Fastify from 'fastify';

import { env } from '@config';
import { logger } from '@logger';
import { testingRoutes } from '@routes';

export async function setup() {
  const server = Fastify({
    logger: false,
  });

  // Register routes
  server.register(testingRoutes, { prefix: '/' });

  try {
    await server.listen({ host: env.WEB_SERVER_HOST, port: env.WEB_SERVER_PORT });
    logger.info(`server listening on http://${env.WEB_SERVER_HOST}:${env.WEB_SERVER_PORT}`);
  } catch (error) {
    // TODO: switch to logger later on
    logger.error(error);
    process.exit(1);
  }
}
