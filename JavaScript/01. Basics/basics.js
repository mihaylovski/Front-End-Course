console.log("script 02")
// Single line comment
/* 
    Multi line comment
    1
    2
    3
*/
//console.log("script 02")


// 05. Variables
var x = 10;
var y = 20;
var a = x * y;
console.log(a);


// 06. Let
// let x = 2;
// let y = 3;

// {
//     let x = 4;
//     let y = 5;
// }


// 07. Const
const car = {type:'Ford', model:'Ranger', color: 'white'}

car.color = 'red';
console.log(car);


// 08. Operators
    var x = 53;
    var y = 2;
    var z = x - y;
console.log(z);


// 09. Aritmetic Operators
/*

+ Addition
- Substraction
* Multiplication
** Exponentation
/ Division
% Modulus
++ Increment
-- Decrement

*/


// 10. Assigment Operators
/*

= 	x = y 	x = y
+= 	x += y 	x = x + y
-= 	x -= y 	x = x - y
*= 	x *= y 	x = x * y
/= 	x /= y 	x = x / y
%= 	x %= y 	x = x % y
<<= 	x <<= y 	x = x << y
>>= 	x >>= y 	x = x >> y
>>>= 	x >>>= y 	x = x >>> y
&= 	x &= y 	x = x & y
^= 	x ^= y 	x = x ^ y
|= 	x |= y 	x = x | y
**= 	x **= y 	x = x ** y

*/


// 11. Data types

// typeof 'Porsche' // Returs 'string'
// typeof 3.14 // Returns Numbers
// typeof true // Returns Boolean
// typeof false // Returns Boolean
// typeof x // Returns Undefined


// 12. Functions

function sample (a1, a1) {
    return a1 + a2;
}
console.log(sample);


// 13. Objects
var carT = {
    make: 'Toyota',
    model: 'Hilux',
    year: '1999',
    color: 'green'
}
console.log(carT);


// 14. Strings
var x = 'WV';
var sln = x.length;
var a = 'Ford';
var b = a.length;
console.log(sln);
console.log(b);


// 15. Strings
var str = 'this is some text to show you how to find a string in a string'
var pos = str.search('some');
var pos2 = str.slice(1,8);

console.log(pos)
console.log(pos2)


// 16. Numbers

var a = 3.14;
var b = 3;
var c = 20;
var d = 40;
var e = d - c;
console.log(e);

// 17. Number Methods
var x = 1233
x.toString();
(1233).toString();
(1000 + 233).toString();
console.log(x);
var y = 3.1475;
y.toFixed(0);
y.toFixed(2);
y.toFixed(4);
y.toFixed(6);
console.log(y);


// 18. Arrays
// var cars = ['Toyota','Ford','Hilux', '4runner']
// console.log(cars);


// 19. Arrays Methods

// var cars = ['Toyota','Ford','Hilux', '4runner']
// cars.pop(); // remove the last item from the array
// cars.push('GMC'); // add other items in the end of the array
// cars.push('Chevy');
// console.log(cars);


// 20. Arrays Sort

var cars = ['Toyota','Ford','Hilux', 'Toyota Surf']
console.log(cars);
cars.reverse();
console.log(cars);
var carsRevers = ['Toyota','Ford','Hilux', '4runner', 'Chevy']
console.log(carsRevers);
carsRevers.sort();
console.log(carsRevers);


// 21. Dates

var d = new Date();
console.log(d);
var a = new Date(2022, 1, 1, 10, 33, 30, 0);
console.log(a);

// 22. Dates Formats
// ISO Date: 2021-03-09
// Short Date: 03/10/2020
// Long date: Mar 10 2021 or 10 Mar 2021


// 23. Get Date Methods
// getFulYear()
// getMonth()
// getDate()
// getHours()
// getMinutes()
// getSeconds()
// getMiliseconds()
// getTime()
// getDate()
// Date.now()

var dN = new Date();
console.log('Defining a New Date')
console.log(dN)


// 24. Date Set Methods
// setDate() 
// setFullYear() 
// setHours() 
// setMilliseconds() 
// setMinutes() 
// setMonth() 	
// setSeconds() 	
// setTime()


// 25. Comparison Numbers

// == 	equal to 	x == 8 	false 	
// x == 5 	true 	
// x == "5" 	true 	
// === 	equal value and equal type 	x === 5 	true 	
// x === "5" 	false 	
// != 	not equal 	x != 8 	true 	
// !== 	not equal value or not equal type 	x !== 5 	false 	
// x !== "5" 	true 	
// x !== 8 	true 	
// > 	greater than 	x > 8 	false 	
// < 	less than 	x < 8 	true 	
// >= 	greater than or equal to 	x >= 8 	false 	
// <= 	less than or equal to 	x <= 8 	true


// 26. Conditional Statements

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed



// 27. Bitwise Operators

// & 	AND 	Sets each bit to 1 if both bits are 1
// | 	OR 	Sets each bit to 1 if one of two bits is 1
// ^ 	XOR 	Sets each bit to 1 if only one of two bits is 1
// ~ 	NOT 	Inverts all the bits
// << 	Zero fill left shift 	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >> 	Signed right shift 	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>> 	Zero fill right shift 	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

