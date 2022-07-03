const {
    uppercase,
    lowercase
} = require('./string');

describe("string", () => {

    test ("should be uppercase a string input", () => {
        expect(uppercase("bob")).toBe("BOB");
    });

     test ("should lowercase a string input", () => {
        expect(lowercase("FULL Sail")).toBe("full sail");
    });

});