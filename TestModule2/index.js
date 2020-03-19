module.exports = class {
    constructor(superClient) {
        this.func3 = require('./func3.js').bind(this, superClient);
    }
}