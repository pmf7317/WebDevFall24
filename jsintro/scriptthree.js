// Create a function that takes in two arguments and returns 
// a concatenated string either as a console.log or alert.


function wordMash(word1, word2) {
	let concat = word1 + word2;

	console.log(concat);
	alert(concat);

	return concat
}

let string1 = "Boots"
let string2 = "Cats"

wordMash(string1, string2); //BootsCats
