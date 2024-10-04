import { FastifyPluginAsync } from 'fastify';

import { helloWorld, helloWorldSchema } from './hello_world';

export const testingRoutes: FastifyPluginAsync = async (server, options) => {
  server.get('', { schema: helloWorldSchema }, helloWorld);
};
