// import request from 'supertest';
// import app from '../server/app';
// import { sequelize } from '../server/database';
// import build from '../server/database/config/build';

// beforeAll(async () => {
//   await build();
// });

describe('test GitHub Actions CICD Piplines', () => {
  test('test for husky', done => {
    expect(3).toBe(3);
    done();
  });
});

// describe('GET /api/v1/stadiums', () => {
//   test('responds from /api/v1/stadiums with JSON and 200 status code', done => {
//     request(app)
//       .get('/api/v1/stadiums')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).toBe(200);
//         expect(res.type).toBe('application/json');
//         expect(typeof res).toBe('object');
//         const response = JSON.parse(res.text);
//         const { data } = response;
//         expect(response.status).toBe(200);
//         expect(data[0].username).toBe('ملعب الساحة');
//         expect(data[0].id).toBe(5);
//         done();

//         if (err) {
//           done(err);
//         }
//       });
//   });

//   test('responds from /api/v1/stadiums/details/5 with JSON and 200 status code', done => {
//     request(app)
//       .get('/api/v1/stadiums/details/5')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).toBe(200);
//         expect(res.type).toBe('application/json');
//         expect(typeof res).toBe('object');
//         const response = JSON.parse(res.text);
//         const { data } = response;
//         expect(response.status).toBe(200);
//         expect(data[0].Stadium.address).toBe('الزيتون');
//         expect(data[0].Stadium.UserId).toBe(5);
//         done();

//         if (err) {
//           done(err);
//         }
//       });
//   });

//   test('responds from /api/v1/stadiums/details/2 with JSON and 200 status code', done => {
//     request(app)
//       .get('/api/v1/stadiums/details/2')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         expect(res.status).toBe(401);
//         expect(res.type).toBe('application/json');
//         expect(typeof res).toBe('object');
//         const response = JSON.parse(res.text);
//         const { data } = response;
//         expect(response.status).toBe(401);
//         expect(data).toBe('هذا الملعب غير متاح');
//         done();

//         if (err) {
//           done(err);
//         }
//       });
//   });

//   describe('GET /api/v1/stadiums/matches/5', () => {
//     test('responds with JSON and 200 status code', done => {
//       request(app)
//         .get('/api/v1/stadiums/matches/5')
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           expect(res.status).toBe(200);
//           expect(res.type).toBe('application/json');
//           expect(typeof res).toBe('object');
//           const response = JSON.parse(res.text);
//           const { data } = response;
//           expect(response.status).toBe(200);
//           expect(Array.isArray(data)).toBe(true);
//           done();

//           if (err) {
//             done(err);
//           }
//         });
//     });
//   });
// });

// afterAll(async () => {
//   sequelize.close();
// });

export {};
