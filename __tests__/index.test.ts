import request from 'supertest';
import app from '../server/app';
import { sequelize } from '../server/database';
import build from '../server/database/config/build';

beforeAll(async () => {
  await build();
});

describe('test GitHub Actions CICD Piplines', () => {
  test('test for husky', done => {
    expect(3).toBe(3);
    done();
  });
});

describe('GET /api/v1/stadiums', () => {
  test('responds from /api/v1/stadiums with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(data[0].username).toBe('ملعب الساحة');
        expect(data[0].id).toBe(5);
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/details/5 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums/details/5')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(data[0].Stadium.address).toBe('الزيتون');
        expect(data[0].Stadium.UserId).toBe(5);
        done();

        if (err) {
          done(err);
        }
      });
  });

  test('responds from /api/v1/stadiums/details/2 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums/details/2')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(401);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(401);
        expect(data).toBe('هذا الملعب غير متاح');
        done();

        if (err) {
          done(err);
        }
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
});

test('test for not exist Stadium should return 404 with "هذا الملعب غير متاح"', done => {
  request(app)
    .get('/api/v1/stadiums/profile/500')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        done(err);
      }
      expect(res.status).toBe(401);
      expect(res.type).toBe('application/json');
      expect(typeof res).toBe('object');
      const response = JSON.parse(res.text);
      const { data } = response;
      expect(response.status).toBe(401);
      expect(data).toBe('هذا الملعب غير متاح');
      done();
    });
});

describe('GET /api/v1/stadiums/profiles', () => {
  test('responds from /api/v1/stadiums/profile/id with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/stadiums/profile/5')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(data.username).toBe('ملعب الساحة');
        expect(typeof data.Stadium).toBe('object');
        expect(data.Stadium.id).toBe(1);
        expect(Array.isArray(data.Stadium.stadiumGallery)).toBe(true);
        expect(typeof data.Stadium.stadiumGallery[0]).toBe('object');
        done();
        if (err) {
          done(err);
        }
      });
  });
});

describe('GET /api/v1/matches', () => {
  test('responds from /api/v1/matches with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/matches')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].ownerId).toBe(1);
        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('post /api/v1/review/5', () => {
  test('responds from /api/v1/review/5 with JSON and 200 status code', done => {
    request(app)
      .post('/api/v1/review/5')
      .set('Accept', 'application/json')
      .send({ value: 4 })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(false);
        done();

        if (err) {
          done(err);
        }
      });
  });
});

describe('GET /api/v1/review/5', () => {
  test('responds from /api/v1/review/5 with JSON and 200 status code', done => {
    request(app)
      .get('/api/v1/review/5')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(typeof res).toBe('object');
        const response = JSON.parse(res.text);
        const { data } = response;
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].value).toBe(4);
        done();

        if (err) {
          done(err);
        }
      });
  });
});

afterAll(() => {
  sequelize.close();
});
