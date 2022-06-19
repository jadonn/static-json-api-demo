const request = require('supertest');
const assert = require('assert');

const URL = 'http://localhost:8080'

describe('GET /health', function() {
    it('responds with OK', function(done) {
        request(URL)
            .get('/health')
            .expect(200, done);
    });
});