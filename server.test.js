const request = require('supertest');
const app = require('./server'); // Assuming your server is exported from server.js

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return "MILESTONE 3"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('MILESTONE 3');
  });

  it('should return "MILESTONE 2"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('MILESTONE 2');
  });

  it('should return "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('Hello, World!');
  });
});
