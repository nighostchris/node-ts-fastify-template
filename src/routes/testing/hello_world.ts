import { FastifyReply, FastifyRequest } from 'fastify';

export const helloWorld = async (request: FastifyRequest, response: FastifyReply) => {
  return { hello: 'world' };
};
