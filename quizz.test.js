const { 
  isTrue, 
  testIfIsTrue, 
  myInt, 
  arrayOfDog, 
  targetTheSecondDog,
  addNewDog,
  deleteEvenNumbers
} = require('./quizz.js');

const arrayOfNumbers = [12, 1, 15, 4, 26];

// First test :

test('Variable should contain a boolean value', () => {
  expect(isTrue).toEqual(true);
});

// Second test :

test('Function testIfIsTrue should send back a message if variable isTrue === true', () => {
  expect(testIfIsTrue(isTrue)).toEqual("C'est vrai");
});

test('Function testIfIsTrue should send back a message if variable isTrue === false', () => {
  expect(testIfIsTrue(!isTrue)).toEqual("C'est faux");
});

// Third test :

test('Test a variable myInt, containing a number between 1 and 100', () => {
  expect(myInt).toBeGreaterThanOrEqual(1);
  expect(myInt).toBeLessThanOrEqual(100);
});

// Fourth test

describe("4. Testing the variable arrayOfDog", () => {
  test('The variable should contain an array of dogs', () => {
    expect(Array.isArray(arrayOfDog)).toBe(true);
  });

  test('Array length should equal 2', () => {
    expect(arrayOfDog).toHaveLength(2);
  });
});

// Fifth test

describe("5. Check the first index of an array", () => {
  test('Is the second dog a Pincher?', () => {
    expect(targetTheSecondDog(arrayOfDog)).toBe("Pincher");
  });
});

// Sixth test

describe("6. Is there a Sheperd in the array?", () => {
  test('Check if the last element of the array is a sheperd', () => {
    expect(addNewDog(arrayOfDog)).toBe("Sheperd");
  });
});

// Seventh test

describe("7. Remove every odd numbers", () => {
  test("Check if the even numbers has been removed", () => {
    expect(deleteEvenNumbers(arrayOfNumbers)).toStrictEqual([1, 15]);
  });
});

