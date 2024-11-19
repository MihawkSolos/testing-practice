const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./index');


// Test 1
it('Capitalize first letter', () => {
    expect(capitalize('hakim')).toBe('Hakim');
});

// Test 2
it('Reversed string', () => {
    expect(reverseString("Hello World")).toBe('dlroW olleH');
});

// Test 3
it('Add 1 + 1', () => {
    expect(calculator.add(1,1)).toBe(2);
});

// Test 4
it('Subtract 1 - 1', () => {
    expect(calculator.sub(1,1)).toBe(0);
});

// Test 5
it('Multiply 2 * 3', () => {
    expect(calculator.mul(2,3)).toBe(6);
});

// Test 6
it('Divide 12 / 6', () => {
    expect(calculator.div(12,6)).toBe(2);
});

// Test 7
it('Caesar Cypher shift of phrase', () => {
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
});

// Test 8
it('Caesar Cypher shift of phrase', () => {
    expect(caesarCipher('xyz',3)).toBe('abc');
});

// Test 9
it('Caesar Cypher shift of phrase', () => {
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});

// Test 10
it('Return avg, min, max, length of an array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});