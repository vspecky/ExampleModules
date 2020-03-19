module.exports = function(client, txt) {
    console.log(`From Function 2: ${txt}`);
    // Calling Function 1 which is in the same module.
    this.func1(txt);
    // Calling Function 3 which is in a different module.
    client.modules.testModule2.func3(txt);
}