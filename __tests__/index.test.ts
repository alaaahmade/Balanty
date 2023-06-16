import request from 'supertest';
import app from '../server/app';
import { build, sequelize } from '../server/database';

beforeAll(done => {
  done();
});

describe('test GitHub Actions CICD Pipelines', () => {
  test('test for husky', done => {
    expect(3).toBe(3);
    done();
  });
});

describe('POST /api/v1/match/create', () => {
  test('responds with JSON and 200 status code', done => {
    request(app)
      .post('/api/v1/match/create')
      .send({
        stadium_id: 1,
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

  test('responds with JSON and 500 status code', done => {
    request(app)
      .post('/api/v1/match/create')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(500);
        expect(res.type).toBe('text/html');
        expect(typeof res).toBe('object');
        done();

        if (err) {
          done(err);
        }
      });
  });
});

afterAll(async () => {
  await build();
  sequelize.close();
});
