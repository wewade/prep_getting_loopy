# Getting Loopy
For loops are great for:

1. Iterating through an `Array` to access values within

2. or running a set of instructions over and over again for a set amount of times, executing `functions` or one-off code.

3. or any/all combinations of the above.

## Getting Started
1. Fork this repository and clone it from your personal GitHub Account
2. In the Terminal, type `cd prep_getting_loopy`
3. Your work will be one in the file named: `loops.js`
4. To run your program, open the terminal and type `node loops.js`

# Exercises

## `Presidents - Accessing values in an Array`
Declare a variable named `presidents` which contains the first 5 presidents' last names: `Washington`, `Adams`, `Jefferson`, `Madison`, `Monroe`.

Now write a _FOR_ loop which iterates through this Array.

Within the _FOR_ loop, use `console.log` to:

- Log the value of `i`. Use a message like `Value of i is: ` and append the value of `i` to this String
- Log what is at index `i` in the array. Use a message like `Value at Index is: ` and append the value stored within the Array at that index.

`console.log` is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use `console.log` to inspect and debug your code.

Example:

![example-1](https://s3.amazonaws.com/uploads.hipchat.com/54891/1222770/P3RrynvNpFvrlmr/upload.png)

**bonus:** could you take the code inside of this FOR loop and encapsulate it inside of a function called `printContent` and still achieve the same result? This new function should accept two parameters.

## `The String of Numbers`
Declare a variable named `stringOfNumbers` and set it's value to `''` (an empty String).

Then write a _FOR_ loop that appends a Number value to that string starting from `10` all the way up to and including `20`.

After the _FOR_ loop, use `console.log` to inspect your variable. In the end your String should look like this `1011121314151617181920`

**bonus:** could you take the code inside of this _FOR_ loop and encapsulate it inside of a function called `appendToString` and still achieve the same result?

## `Add only even numbers to an array`
Declare a variable named `evenNumberArray`.

Use a _FOR_ loop to add only even numbers to an Array. Add `50` even numbers to the `evenNumberArray` starting with the value `0`.

## `Pushing values to the odd indexes of an Array - 'Not Even Brah'`

Someone forgot to fill out this array! Oh noes...

Declare a new variable named `oopsArray` set it's value to be: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`

using a _FOR_ loop, add the string `'nope'` to every odd index.

Example result should look like:

```javascript
`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
```

## `Going backwards?!`
Using a _FOR_ loop, iterate through the Array stored at `oopsArray` **backwards**. `console.log` each value in the Array.

example output:
```
what
nope
for
nope
down
nope
turn
```

## `isNapTime`
Declare a variable named `isNapTime`. Set it to `false`

Declare a variable named `napSchedule`. Set it's value to be an `Array` with the values `[false, false, true, false, true, true]`

Declare a function named `nap`. This function takes in a single parameter called `schedule`

- If `schedule` is `true` then use `console.log` to display the message `ZzZzZzZz`
- otherwise if `schedule` is `false` use `console.log` to display the message `Gotta get to work!` and then change the value of `isNapTime` to `true`

Now, Write a FOR loop that iterates through the `napSchedule` array and runs the function `nap` while passing in the value at the current position of `napSchedule` into the `nap` function.

exmaple of output:

![example-2](https://s3.amazonaws.com/uploads.hipchat.com/54891/1222770/mpHiHwoQcuGYFkN/upload.png)

## `CopyArray - clone array values`
Declare a variable named `copyOfValuesArray` and set it's value to be an empty array, `[]`.

Declare a variable named `valuesArray` and set it's value to be an array, `[99, 66, 829, 1941, 8, 76]`.

Declare a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. Inside of this function you will loop through the contents of `originArray` and push each value into `destinationArray`.

To get started, below your function declaration, call your function and pass in the two variables, `valuesArray` and `copyOfValuesArray`. After that, use `console.log` to to inspect the values of `valuesArray` and `copyOfValuesArray` to make sure they have the same values (which means your function worked!).

# Final Boss

![final-boss](https://s3.amazonaws.com/uploads.hipchat.com/54891/2015941/zamX8AqbgYw0QJ8/giphy.gif)

## Stage 1 - Only String Values
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`

Declare a function named `generateArrayOfStrings` which takes a single argument `storage`. This function returns a new Array with only `String` values inside of it.

## Final Form - Change values of objects stored within an Array
It's that time again, we need to graduate the current class of students and start enrollment for the next class.

Declare a variable named `currentClass` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).

Declare a function named `graduateAndSetNewClass`, it takes a single argument called `class`.

Your function will iterate through the `class` argument and check each student's `enrolled` property.

If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.
