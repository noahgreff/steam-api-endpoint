/**
 * Loading test dependencies
 */

const request = require('supertest')
const server = require('../server');


/**
 * Simple call to server
 */

describe('Steam API response', function() {
    it('checking server response', function(callback) {
        request(server).get('/')
            .expect(200)
            .expect({ message: "STEAM API Endpoint" }, callback);
    });
});