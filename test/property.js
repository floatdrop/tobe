/* global describe, it */

var to = require('..');
require('should');

describe('to.property', function () {
    it('should have property function', function () {
        to.should.have.property('property');
    });

    it('should return function', function () {
        to.have.property('').should.be.instanceOf(Function);
    });

    it('should be valid assertion', function () {
        (function () { to.have.property('one')({ one: 1 }); }).should.not.throw();
        (function () { to.have.property('two')({ one: 1 }); }).should.throw();
    });
});
