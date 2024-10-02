import supertest from 'supertest';
import { FastifyInstance } from 'fastify';

import { setup } from '@server';

describe('[routes][testing]', async () => {
  let webServer: FastifyInstance;

  beforeAll(async () => {
    webServer = await setup();
  });

  afterAll(async () => {
    await webServer.close();
  });

  test('Success - Get hello world in response', async () => {
    const { status, body } = await supertest(webServer.server).get('/');
    expect(status).toBe(200);
    expect(body.hello).toBe('world');
  });
});
