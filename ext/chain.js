module.exports = function(should, Assertion) {
    function addLink(name) {
        Object.defineProperty(Assertion.prototype, name, {
            get: function() {
                return this;
            },
            enumerable: true
        });
    }

    ['an', 'of', 'a', 'and', 'be', 'have', 'with', 'is', 'which', 'the'].forEach(addLink);
};
