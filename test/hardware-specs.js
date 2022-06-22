const request = require('supertest');
const assert = require('assert');
const readFile = require('fs').promises.readFile

const URL = 'http://localhost:8080'

describe('GET /health', function() {
    it('responds with OK', function(done) {
        request(URL)
            .get('/health')
            .expect(200, done);
    });
    it('GETs /hardware-specs.json', async function() {
        this.timeout(5000);
        const originalData = await readFile('./_data/hardware-specs.json', {encoding: 'utf-8'});
        await request(URL)
            .get('/hardware-specs.json')
            .expect(function(res) {
                assert.deepStrictEqual(res.body, JSON.stringify(originalData));
            });
    })
});