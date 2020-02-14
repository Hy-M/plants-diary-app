process.env.NODE_ENV = 'test';

const app = require('../app');
const connection = require('../db/connection');
const { expect } = require('chai');
const request = require('supertest')(app);

beforeEach(function () {
    this.timeout(10000);
    return connection
    .migrate.rollback()
    .then(() => connection.migrate.latest())
    .then(() => connection.seed.run())
});

after(() => connection.destroy());

describe('/api', () => {
    describe('/garden', () => {
        describe('GET', () => {
            it('status: 200 returns an array with a key of garden', () => {
                return request
                .get('/api/garden')
                .expect(200)
                .then(({ body }) => {
                    expect(body).to.haveOwnProperty('garden');
                    expect(body.garden).to.be.an('array');
                    expect(body.garden[0]).to.haveOwnProperty('plant_id');
                })
            })
        })
    })
})
 