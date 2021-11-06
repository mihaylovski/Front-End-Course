// 01. JSON Syntax
// Data is in name/value pairs
// Data is separeted by comas
// Curly braces hold objecs
// Square brackets hold arrays

// Example
var myObj, x;
myObj = {name: 'John', age: '30', city: 'New York'};
x = myObj.name;
document.getElementById('example').innerHTML = x

// 03. Data types

// String
{'name': 'Koralin'}

// Number
{'age': '30'}

//Object
{
    'employee': {name: 'John', age: '30', city: 'New York'}
}

// Array
{
    'employee': { 'John', 'Pilitron', 'Anna-Maria'}
}

//Booleans
{'sale': true}

//Null
{'middlename':null}

// 04. Parse
// Parse the data wotj JSON.parase() and the data becomes JS object

// 05. Stringify
// To convert and object into a string use JSON.stringify()

// 06. Objects
// JSON objects are surrounded by curly braces {}
// JSON objects are written in key/value paris.
// Keys must be strings, and values must be a valid JSON data type(strings, number,objects, array, boolean or null)
// Keys and values are separetate by a coma.
// Each key/value pair is separetate by come.

// 07. Arrays
// Arrays in JSON are almost the same as arrays in JavaScript.
// In JSON, array values must be of type string, number, object, array, boolean or null.
// In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined.

// 07. PHP
// Arrays in PHP will also be converted into JSON when using the PHP function json_encode():


// 08.JSONP
// JSONP is a method for sending JSON data without worrying about cross-domain issues.