
/*this is a simple javascript file to demonstrate variable types and comparisons*/

// declaring variables of different types
let numExample = 50;
var stringExample = "I am a string";
const pi = 3.14159;

/* this is how you can log values and types to the console */

console.log(`the variable numExample has the value of: ${numExample}`);
console.log(typeof stringExample);

/*arrays in javascript can hold multiple types of values */

let arrayExample = ['1', 1, "0", 0];

console.log(`The array has a length of: ${arrayExample.length}`);
console.log(typeof arrayExample);

/* its important to make sure you are using the correct types when comparing values as javascript automatically converts types */

let changeType = "1";
let mathTest = 1;

console.log(typeof mathTest==typeof changeType);
/* this will return false because one is a string and the other is a number */
console.log(changeType==mathTest);
/* this will return true because javascript converts the string to a number before comparing */
console.log(changeType===mathTest);

/* this is an example of an object in javascript */

const objectExample = {
    name: "Ariel",
    age: 24,
    pet: "Chanel",
    isStudent: true,
    hobbies: ["music", "gaming", "coding", "fashion"]
};

/* here is how you can use math operations in javascript */

let multiplicationExample = 50*2;
let divisionExample = 50/2;
let additionExample = 50+2;
let subtractionExample = 50-2;
let squaredExample = 10**2;
let modulusExample = 50%3; // modulus gives the remainder of a division operation

console.log(`Multiplication Example: ${multiplicationExample} \n
    Division Example: ${divisionExample} \n
    Squared Example: ${squaredExample} \n
    Modulus Example: ${modulusExample}`);

/* operators can also be used to modify existing variables */

numExample += 10; // adds 10 to numExample
numExample *= 2; // multiplies numExample by 2
numExample -= 5; // subtracts 5 from numExample
numExample /= 3; // divides numExample by 3
numExample <= 2; // checks if numExample is less than or equal to 2
numExample >= 2; // checks if numExample is greater than or equal to 2
numExample == 2; // checks if numExample is equal to 2
numExample != 2; // checks if numExample is not equal to 2
numExample < 2; // checks if numExample is less than 2
numExample > 2; // checks if numExample is greater than 2
numExample === 2; // checks if numExample is strictly equal to 2 in both value and type
numExample !== 2; // checks if numExample is not strictly equal to 2 in either value or type (NOT)
numExample %= 2; // assigns the remainder of numExample divided by 2 to numExample
numExample == 2 && numExample == 1 + 1; // checks if both conditions are true (AND)
numExample == 2 || numExample == 1 + 1; // checks if at least one condition is true (OR)
numExample++; // increments numExample by 1
numExample--; // decrements numExample by 1
