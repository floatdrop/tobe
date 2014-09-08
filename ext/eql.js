var is = require('is');

module.exports = function(should, Assertion) {
    Assertion.add('eql', function(val) {
        return function (obj) {
            return is.equal(obj, val);
        };
    });
};
