import { FastifyInstance } from 'fastify';

import { helloWorld } from './hello_world';

export const testingRoutes = (server: FastifyInstance, options: unknown, done: (err?: Error) => void) => {
  server.get('', helloWorld);
  done();
};
