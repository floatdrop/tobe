/* global describe, it */

var to = require('..');
require('should');

describe('to.eql', function () {
    it('should have eql function', function () {
        to.should.have.property('eql');
    });

    it('should return function', function () {
        to.eql(5).should.be.instanceOf(Function);
    });

    it('should have `and` extensions', function () {
        to.eql(5).and.should.be.instanceOf(Function);
    });

    it('should be valid assertion', function () {
        (function () { to.eql(5)(5); }).should.not.throw();
        (function () { to.eql(5)(6); }).should.throw();
    });
});
