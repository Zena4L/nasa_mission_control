const app = require('../app');
const request = require('supertest');

describe('test GET /launch', () => {
  test('should response with success of 200', async () => {
    const response = await request(app).get('/launch').expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

// describe('test POST/launch', () => {
//   test('should reespond with 201 status', () => {});
//   test('should catch Missing required launch property', () => {});
//   test('should catch Invalid launch date', () => {});
// });
describe('Test POST /launch', () => {
  const completeLaunchData = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-62 f',
    launchDate: 'January 4, 2028',
  };
  const launchDataWithoutDate = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-62 f',
  };

  const launchDataWithInvalidDate = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-62 f',
    launchDate: 'zoot',
  };

  test('It should respond with 201 created', async () => {
    const response = await request(app)
      .post('/v1/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
  test('It should catch missing required properties', async () => {
    const response = await request(app)
      .post('/v1/launches')
      .send(launchDataWithoutDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Missing required launch property',
    });
  });
  test('It should catch invalid dates', async () => {
    const response = await request(app)
      .post('/v1/launches')
      .send(launchDataWithInvalidDate)
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'Invalid launch date',
    });
  });
});
