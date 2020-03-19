module.exports = class {
    constructor(superClient) {
        this.func1 = require('./func1.js').bind(this, superClient);
        this.func2 = require('./func2.js').bind(this, superClient);
    }
}