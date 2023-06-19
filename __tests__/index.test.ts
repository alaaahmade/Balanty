import request from 'supertest';
import app from '../server/app';
import { build, sequelize } from '../server/database';

beforeAll(async () => {
  await build();
});

describe('test GitHub Actions CICD Pipelines', () => {
  test('test for husky', done => {
    expect(3).toBe(3);
    done();
  });
});

describe('POST /api/v1/matches', () => {
  test('responds with JSON and 200 status code', done => {
    request(app)
      .post('/api/v1/matches')
      .send({
        StadiumId: 1,
        title: 'hi test',
        description: 'string',
        startDate: 'Date',
        endDate: 'Date',
        seats: 15,
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(202);
        expect(data.title).toBe('hi test');
        expect(data.startDate).toBe('Date');
        expect(data.seats).toBe(15);
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('test validation error ', done => {
    request(app)
      .post('/api/v1/matches')
      .set('Accept', 'application/json')
      .send({
        title: 'hi test',
        description: 'string',
        startDate: 'Date',
        endDate: 'Date',
        seats: 15,
      })
      .end((err, res) => {
        expect(res.status).toBe(422);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        done();

        if (err) {
          done(err);
        }
      });
  });
});

afterAll(async () => {
  // await build();
  sequelize.close();
});
