// Create a conditional statement that checks if two strings are equal. 
// Include an if and else statement. 
// Create an alert that gives your user feedback based on the string defined. 
// Test your statement with different strings to make sure both alerts work.


let word1 = "doodoo";
let word2 = "shishi"; //same length
//seperate test cases
//let word2 = "doodoo"; //identical
//let word2 = "piss"; //strings not equal or identical

if (word1 === word2){
	alert("The strings are identical :) #Awesomeness!")
} else if (word1.length === word2.length){
	alert("The strings are equal in length.")
} else{
	alert("The strings are NOT equal in length or identical period.")
}