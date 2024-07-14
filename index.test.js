const {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} = require(".");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 5 from 15 to equal 10", () => {
  expect(calculator.subtract(15, 5)).toBe(10);
});

test("multiply 5 by 5 to equal 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("divides 10 by 2 to equal 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Capitalize h in hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Reverse string hello to olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverse string hello world to dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("cipher 'abc' (3) to def", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("cipher 'HeLLo' (3) to KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("cipher 'Hello, World!' (3) to Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzes [1, 2, 3, 4, 5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("analyzes [10, -5, 2, 7, 15]", () => {
  expect(analyzeArray([10, -5, 2, 7, 15])).toEqual({
    average: 5.8,
    min: -5,
    max: 15,
    length: 5,
  });
});

test("analyzes [42]", () => {
  expect(analyzeArray([42])).toEqual({
    average: 42,
    min: 42,
    max: 42,
    length: 1,
  });
});

test("analyzes an empty array", () => {
  expect(analyzeArray([])).toBeNull();
});
