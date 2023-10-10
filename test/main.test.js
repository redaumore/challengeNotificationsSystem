const request = require('supertest');
const server = require('../src/server');

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('Challenge Notification System Test', () => {
  it('ejecute a dummy function', async () => {
    const response = await request(server)
      .get('/')
   
    expect(response.body.message).toBe('Welcome to Challenge Notification System.')
  })

})

describe('Test Status Notifications', () => {
  it('Send 2 notifications in 1 minute: OK', async () => {
    jest.useFakeTimers()
    let response;
    
    response = await request(server)
      .post('/messages')
      .send({'email': 'recipient1', 'message': 'message 1 to recipient1'})
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    response = await request(server)
      .post('/messages')
      .send({'email': 'recipient1', 'message': 'message 2 to recipient1'})
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
    
    expect(response.status).toBe(200)

    jest.useRealTimers()
  })
})