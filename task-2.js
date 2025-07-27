// ### Task-2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// </br>
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// </br>
// Print the result in 2 decimal places.


var Mathematics=79;
var Biology=85;
var Chemistry=90;
var Physics=95;
var Bangla=80;
var total=Mathematics+Biology+Chemistry+Physics+Bangla;
var average=total/5;
console.log("Total Marks: "+average.toFixed(2));