const {
    add,
    subtract,
    multiply,
    divide,
    square,
    max
} = require('./math');


describe("math", () => {

    test ("should be adding numbers together", () => {
        expect(add(1, 2)).toBe(3);
    });

    test ("should be subtracting numbers", () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test ("should be multiplying numbers", () => {
        expect(multiply(5, 2)).toBe(10);
    });

    test ("should be dividing numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test ("should be squaring numbers", () => {
        expect(square(5)).toBe(25);
    });

    test ("should be finding the max of two numbers", () => {
        expect(max(5, 2)).toBe(5);
    });

});