// 1. What happens when you add a number and string together? Concatenation! Add/Concatenate the variables 'one', 'two' and 'three' in the correct order so that you can assign the value of sum to be '1081'.
let one = 10;
let two = '8';
let three = 1;

let sum = one + two + three;


// ------------------------------------------


// 2. write a loop below that starts at 20 and ends at 100. Check each number,
// if the number is divisible by 3, add it to the 'threes' array.
let threes = []
for (let i = 20; i <= 100; i++) {
  if (i % 3 == 0) {
    threes.push(i);
  }
}
console.log(threes)





// ------------------------------------------


// 3. write code to find the class average given the following test scores

let scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

// code below
// function findAverage(scores) {

let total = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
let average = (total / scores.length)
// return average
// }

// findAverage(scores)
console.log(average)