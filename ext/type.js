module.exports = function(should, Assertion) {
    Assertion.add('instanceOf', function(constructor) {
        return function (obj) {
            return Object(obj) instanceof constructor;
        };
    });
};
