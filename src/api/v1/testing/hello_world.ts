import { FastifySchema, RouteHandlerMethod } from 'fastify';

// body: validates the body of the request if it is a POST, PUT, or PATCH method
// querystring or query: validates the query string
// params: validates the route params
// headers: validates the request headers
// Ajv v8 will be the validation library under the hook
export const helloWorldSchema: FastifySchema = {
  // body: {},
  // headers: {},
  // params: {},
  // querystring: {},
};

export const helloWorld: RouteHandlerMethod = async (request, response) => {
  return { hello: 'world' };
};
