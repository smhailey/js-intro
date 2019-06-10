// 1. Write a function that will iterate over the properties of the provided object and return a new object with only the key/value pairs of the provided object whose value is truthy.
// Example:
// input: { firstName: "Theo", middleName: "", lastName: "Gerrard" }
// output: { firstName: "Theo", lastName: "Gerrard" }
// Hint: Utilize a for...in loop - 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Truthy Reference: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

function truthyExtractor(obj) {

}


// ------------------------------------------


// 2. Using dot and bracket notation modify the existing object values to replace the information with your own

let me = {
  'name': 'Jake Overall',
  'age': 29,
  'hair color': 'brown'
};
me.name = 'Sean';
me.age = 50;
me['hair color'] = 'brown';

// ------------------------------------------


// 3. Iterate over an object and add the property or key names to an array. Have the function return 
// the array of keys.
// Example:
// input: { 'name': "Jake Overall", 'age': 29, 'hair color': "brown" }
// output: [ 'name', 'age', 'hair color' ]


function objectKeys(obj) {

}