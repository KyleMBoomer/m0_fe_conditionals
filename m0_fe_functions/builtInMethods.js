// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
//The .includes method reutrns true if it contains a specified string; in this case "Hello" 
//It is a Boolean method, as its intent is to return T or F
//In this case, it will return "true," since the string contains "Hello"


"Hello World".endsWith("Hello");
//.endsWith is another Boolean method that will return "false" in this case, since the specified string does not end with "Hello"


"Hello World".endsWith("rld");
//New patient, same treatment. The specified string does end with "rld" so the argument will return "true"


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

//I'm going to attempt the repeat() method, which will repeat a string a specified number of times. 
var rap = "knock"
console.log(`I'll open the door when you ${rap.repeat(3)}`)





// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var jellyBeans = ["orange", "cherry","lemon", "lime" ];
// I will use the Uppercase method to capitalize each jellybean flavor in the array.
console.log("jellyBeans".toUpperCase())
