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
// input:
// output:
// function:
// process:

// a) Create a test with an expect statement using the variable provided.

describe("nameToCap", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () =>{
    expect(nameToCap(hitchhikersCharacters)).toStrictEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
//   nameToCap
//     ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

//   ● nameToCap › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//     ReferenceError: nameToCap is not defined

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Pseudocode:
// input:
// output:
// function:
// process:

// a) Create a test with an expect statement using the variables provided.

describe("remainingNums", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainingNums(hodgepodge1)).toStrictEqual([ 2, 0, -1, 0 ])
    expect(remainingNums(hodgepodge2)).toStrictEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// remainingNums
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ● remainingNums › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: remainingNums is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Pseudocode:
// input:
// output:
// function:
// process:

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumCubed(cubeAndSum1)).toStrictEqual(99)
    expect(sumCubed(cubeAndSum2)).toStrictEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// sumCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// ● sumCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumCubed is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
