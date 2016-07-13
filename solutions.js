/*## `Presidents - Accessing values in an Array`
Declare a variable named `presidents` which contains the first 5 presidents' last names: `Washington`, `Adams`, `Jefferson`, `Madison`, `Monroe`.*/

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

/*Now write a _FOR_ loop which iterates through this Array.

Within the _FOR_ loop, use `console.log` to:

- Log the value of `i`. Use a message like `Value of i is: ` and append the value of `i` to this String
- Log what is at index `i` in the array. Use a message like `Value at Index is: ` and append the value stored within the Array at that index.*/


for(var i = 0; i<presidents.length; i++){
  console.log(presidents[i]);
  console.log("Value of i is: " + [i]);
  console.log("Value at " + [i] + " is: " + presidents[i]);
}

/***bonus:** could you take the code inside of this FOR loop and encapsulate it inside of a function called `printContent` and still achieve the same result? This new function should accept two parameters.*/

function printContent(names){
  for(var i = 0; i<names.length; i++){
    console.log("Value of i is: " + [i]);
    console.log("Value at " + [i] + " is: " + names[i]);
  }
  return names;
}

printContent(presidents);

/*Declare a variable named `stringOfNumbers` and set it's value to `''` (an empty String).*/

var stringOfNumbers = "";

/*Then write a _FOR_ loop that appends a Number value to that string starting from `10` all the way up to and including `20`.*/

for(var i = 10; i<21; i++){
  stringOfNumbers += i;
}
console.log(stringOfNumbers);

/***bonus:** could you take the code inside of this _FOR_ loop and encapsulate it inside of a function called `appendToString` and still achieve the same result?*/

var numberStr = "";

function appendToString(str){
  for (var i = 10; i<21; i++){
    str += i;
  }
  return str;
}

console.log(appendToString(numberStr));

