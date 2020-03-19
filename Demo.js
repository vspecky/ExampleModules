const TestModule = require('./TestModule/');
const TestModule2 = require('./TestModule2/');

class DummyClient {
    constructor() {
        this.modules = {
            testModule: new TestModule(this),
            testModule2: new TestModule2(this)
        }
    }
}

const bot = new DummyClient();

console.log("OUTPUT");
bot.modules.testModule.func2('Testing');

/*
OUTPUT
From Function 2: Testing
From Function 1: Testing
From Function 3: Testing
*/