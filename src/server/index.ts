import Fastify from 'fastify';

export async function setup() {
  const server = Fastify({});

  try {
    // TODO: use centralized env config file
    await server.listen({ host: process.env.HOST ?? '', port: parseInt(process.env.PORT ?? '', 10) });
    console.log(`server listening on http://${process.env.HOST}:${process.env.PORT}`);
  } catch (error) {
    // TODO: switch to logger later on
    console.error(error);
    process.exit(1);
  }
}
