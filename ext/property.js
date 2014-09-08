module.exports = function(should, Assertion) {
    Assertion.add('property', function (name, val) {
        this._assertions.push(function () {
            name = String(name);
            if(arguments.length > 1) {
                var p = {};
                p[name] = val;
                this.have.properties(p);
            } else {
                this.have.properties(name);
            }
            this.obj = this.obj[name];
        }.bind(this));
    });
};
