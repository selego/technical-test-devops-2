const request = require('supertest');
const { app } = require('../server');
const assert = require('assert');

describe('API Tests', () => {
  it('should return Hello from the développeur star on GET /', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.text, 'Hello from the the développeur star ⭐');
  });

  it('should return status 200 on GET /health', async () => {
    const res = await request(app).get('/health');
    assert.strictEqual(res.status, 200);
  });

  it('should return 403 for invalid API key on GET /secret', async () => {
    const res = await request(app).get('/secret').set('api-key', 'invalid');
    assert.strictEqual(res.status, 403);
  });

  it('should return secret value for valid API key on GET /secret', async () => {
    const res = await request(app).get('/secret').set('api-key', process.env.SECRET_API_KEY);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.text, `Secret value is: ${process.env.SECRET_ENV}`);
  });
});
