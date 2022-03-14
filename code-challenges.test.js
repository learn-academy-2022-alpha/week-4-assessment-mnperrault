// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('removeThenShuffle', () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffle(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    expect(shuffle(colors2)).not.toEqual(expect.arrayContaining(["chartreuse"]))
  })
})

ReferenceError: removeThenShuffle is not defined


// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function named removeThenShuffle
// Create a method that removes the first element of the array which will be .shift()
// The method will shuffle the remaining items in the arrays
// A for loop will not work in this case so I will use a while loop
// The new array is returned

const shuffle = (array) => {
  array.shift()
  var n = array.length
  let newArr = []
    while (array.length > 0) {
      newArr.push(array.splice(Math.floor(Math.random() * n--), 1))
    }
    return newArr.flat(1)
}

// Got Green.




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//Psuedocode:
// Create a function that takes in an array
// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// create a local variable that maps through each number of the array and sorts the maximum and minimum numbers in the array


function getMinMax(arr){
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
   let result =  ([maximum, minimum]); 
    return result;
  };
  
  getMinMax('3, 56, 90, -8, 0, 23, 6')

//Psuedocode:
// Create a function that takes in an array
// const nums2 = [109, 5, 9, 67, 8, 24]
// create a local variable that maps through each number of the array and sorts the maximum and minimum numbers in the array

  function getMinMax(arr){
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
   let result =  ([maximum, minimum]); 
  
  
  getMinMax('109, 5, 9, 67, 8, 24')

// b) Create the function that makes the test pass.

//Pseudo Code:
// Create a function named colors1
// Return the result which will be the numbers in the array sorted by maximum and minimum

const colors1 = (24, 27, 30, 33, 36) => {
  return result;
};

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noRepeatingValues", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// Got Red.
//  ● noRepeatingValues › takes in two arrays as arguments and returns one array with no duplicate values
// ReferenceError: noDuplicates is not defined


// b) Create the function that makes the test pass.

// Pseudo Code:
// Create a function named noRepeatingValues thats has a parameter of an array
// Create a new variable that holds an empty array
// Create a method that combines the arrays
// Create a method to remove duplicates
// Returns the new array with no duplicates


const noDuplicates = (...array) => {
  let newArr = []
  array.forEach(value => {
    newArr = newArr.concat(value)
  })
  return [...new Set(newArr)]
}

// Got Green. 