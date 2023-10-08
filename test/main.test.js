const request = require('supertest');
const server = require('../src/server');

describe('Challenge Notification System Test', () => {
  it('ejecute a dummy function', async () => {
    const response = await request(server)
      .get('/')
   
    expect(response.body.message).toBe('Welcome to Challenge Notification System.')
  })
})