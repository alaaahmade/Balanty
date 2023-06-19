import request from 'supertest';
import app from '../server/app';
import { build, sequelize } from '../server/database';

beforeAll(async (): Promise<void> => {
  await build();
});

describe('test GitHub Actions CICD Piplines', () => {
  test('test for husky', () => {
    expect(3).toBe(3);
  });
});

describe('GET /api/v1/matches/stadium/5', () => {
  test('responds with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/matches/stadium/5')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        done();

        if (err) {
          done(err);
        }
      });
  });
});

afterAll((): void => {
  sequelize.close();
});
