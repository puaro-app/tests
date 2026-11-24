'use strict';

const request = require('supertest');
const app = require('../../app');

describe('POST /login', () => {
  it('rejects a wrong password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'kim@example.com', password: 'not the right password' });
    expect(res.status).toBe(401);
  });
});
