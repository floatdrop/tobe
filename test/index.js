/* global describe, it */

var to = require('..');
require('should');

describe('to.be', function () {
    it('should return an object with helpers', function () {
        to.should.be.instanceOf(Object);
        to.should.have.property('be');
        to.should.have.property('and');
    });
});
