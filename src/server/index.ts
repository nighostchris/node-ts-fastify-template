import fastify from 'fastify';
import swagger from '@fastify/swagger';
import formbody from '@fastify/formbody';
import swaggerUI from '@fastify/swagger-ui';

import { env } from '@config';
import { testingRoutes } from '@routes';

export async function setup() {
  const server = fastify({
    logger: false,
  });

  if (env.NODE_ENV === 'development') {
    // Register swagger
    await server.register(swagger, {
      openapi: {
        openapi: '3.0.0',
        info: {
          title: 'Node TS Fastify Template Swagger',
          description: 'Node TS Fastify Template API Endpoint Collection',
          version: '0.0.0',
        },
        servers: [
          {
            url: `http://${env.WEB_SERVER_HOST}:${env.WEB_SERVER_PORT}`,
            description: `Local`,
          },
        ],
      },
    });

    // Register swagger UI
    await server.register(swaggerUI, {
      routePrefix: '/docs',
      uiConfig: {
        deepLinking: true,
        docExpansion: 'full',
      },
    });
  }

  // Enable parsing URL-encoded form data
  server.register(formbody);

  // Register routes
  server.register(testingRoutes, { prefix: '/' });

  // Load plugins
  await server.ready();

  if (env.NODE_ENV === 'development') {
    // Instantiate swagger
    server.swagger();
  }

  return server;
}
