/* global describe, it */

var to = require('..');
require('should');

describe('to.instanceOf', function () {
    it('should have instanceOf function', function () {
        to.should.have.property('instanceOf');
    });

    it('should return function', function () {
        to.be.instanceOf(Number).should.be.instanceOf(Function);
    });

    it('should be valid assertion', function () {
        (function () { to.be.instanceOf(Number)(5); }).should.not.throw();
        (function () { to.be.instanceOf(Number)('five'); }).should.throw();
    });
});
