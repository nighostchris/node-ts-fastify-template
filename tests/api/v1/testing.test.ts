import supertest from 'supertest';
import { FastifyInstance } from 'fastify';

import { setup } from '@server';

describe('[api][v1][testing]', async () => {
  let webServer: FastifyInstance;

  beforeAll(async () => {
    webServer = await setup();
  });

  afterAll(async () => {
    await webServer.close();
  });

  test('Success - Get hello world in response', async () => {
    const { status, body } = await supertest(webServer.server).get('/api/v1/testing');
    expect(status).toBe(200);
    expect(body.hello).toBe('world');
  });
});
