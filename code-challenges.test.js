// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Pseudocode:
// input: an array of objects
// output: a sentence about each person with their name capitalized
// function: nameToCap
// process: use the map method to iterate through each object in the input array, then use split to separate the names by spaces, toUpperCase to capitalize the first letter of each word, then slice the words from the second letter, and finally join the words back together. Lastly, return a sentence using the capitalized name and occupation of each object using string interpolation.

// a) Create a test with an expect statement using the variable provided.

describe("nameToCap", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () =>{
    expect(nameToCap(hitchhikersCharacters)).toStrictEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  })
})

// FAIL  ./code-challenges.test.js
//   nameToCap
//     ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

//   ● nameToCap › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//     ReferenceError: nameToCap is not defined

// b) Create the function that makes the test pass.

// Function nameToCap that takes an array as a parameter 
const nameToCap = (array)  =>{
  // Return a new array by mapping each object in the input array
  return array.map(object => {
     // Create a variable to store the capitalized name: capCharName
      const capCharName = object.name
      // Split the name of the current object by spaces into an array of words using the split method
      .split(" ")
      // Capitalize the first character of each word in the capCharName array using the charAt(0) method and toUpperCase() method
      //  +
      // Slice the words from the second letter (index of 1) using slice method
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      // Join the capitalized letters and sliced words back into a single string separated by spaces using join method
      .join(" ")
      // Create a sentence using string interpolation with the capCharName variable and the occupation of the current object
      return `${capCharName} is ${object.occupation}.`
  })
}
// Output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// PASS  ./code-challenges.test.js
// nameToCap
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.152 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.71s.
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Pseudocode:
// input: mixed data array
// output: array of numbers divided by 3
// function: remainingNums
// process: function called remainingNums that takes an array as a parameter and using the filter method and Number.isInteger function filter out all but numbers. Finally using the map method iterate over the remaining numbers and divide by 3 using the modulo operator. 

// a) Create a test with an expect statement using the variables provided.

describe("remainingNums", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainingNums(hodgepodge1)).toStrictEqual([ 2, 0, -1, 0 ])
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    expect(remainingNums(hodgepodge2)).toStrictEqual([ 2, 1, -1 ])
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
  })
})

// FAIL  ./code-challenges.test.js
// remainingNums
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ● remainingNums › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: remainingNums is not defined

// b) Create the function that makes the test pass.

// Function remainingNums that takes an array as a parameter 
const remainingNums = (array) => {
  // Use the filter method and Number.isInteger to filter out all but numbers
  return array.filter(Number.isInteger)
  // Use map method iterate over the remaining numbers and divide by 3 using the modulo operator. 
  .map(num => num % 3)
}

// PASS  ./code-challenges.test.js
// nameToCap
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// remainingNums
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.164 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.83s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Pseudocode:
// input: array of numbers
// output: sum of all numbers cubed
// function: sumCubed
// process: function called 'sumCubed' takes in an array as an argument. Use the reduce method on the array to iterate through each element, calculate the sum of the cube of each value in the array by raising the value to the power of 3 using the ** operator and adding it to the sum of all the values cubed in the array. Return the sum of all the values cubed in the array.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumCubed(cubeAndSum1)).toStrictEqual(99)
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    expect(sumCubed(cubeAndSum2)).toStrictEqual(1125)
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
  })
})

// FAIL  ./code-challenges.test.js
// sumCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// ● sumCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

const sumCubed = (array) => {
  return array.reduce((sum, value) => sum + (value ** 3), 0)
}

// PASS  ./code-challenges.test.js
// nameToCap
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// remainingNums
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// sumCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.175 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.71s.