// Create function that takes in one argument that is passed
// through a conditional statement with if, else ifs, and else. 
// Return the result as an alert or console.log. 
// Test all of your conditions to make sure you can receive all of your results back. 

function checkNumber(value) {
  if (value > 69) {
    console.log("The number is greater than 69.");
    alert("The number is greater than 69.");
  } else if (value === 69) {
    console.log("The number is exactly 69.");
    alert("The number is exactly 69.");
  } else if (value > 0) {
    console.log("The number is positive but less than 69.");
    alert("The number is positive but less than 69.");
  } else if (value < 0) {
    console.log("The number is negative.");
    alert("The number is negative.");
  } else {
    console.log("The number is zero.");
    alert("The number is zero.");
  }
}

checkNumber(15); // pos but less than 69
checkNumber(69); // exactly 69
checkNumber(99); // greater than 69
checkNumber(-3); // neg
checkNumber(0); // zero