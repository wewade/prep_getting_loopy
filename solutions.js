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