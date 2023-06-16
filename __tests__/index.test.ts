import * as request from 'supertest';
import app from '../server/app';

describe('test GitHub Actions CICD Pipelines', () => {
  test('test for husky', () => {
    expect(3).toBe(3);
  });
});

describe('Post /match/create', () => {
  it('respond with json', done => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
