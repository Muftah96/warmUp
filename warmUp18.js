// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"


// i couldn't think in straight way my mind keeps distracting me and worrying about the project. 

// all what i have now is that we need to split the text and loop over the array
//  but i have no idea now for how to comper it to every other element in the array 
// and make a counter for evey index that will incremint if we find the same char

function symbol(argument) {
	// body...
	var arr = argument.split('')
	var array = [];
	
	for (var i = 0; i < arr.length; i++) {
		array = arr[i].slice(i,1,1)
	}
	

	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < array.length; j++) {
			if (arr[i] === arr[j]){
				array[i] = Number.array[i] + 1

			}
		}
	}
	return array
}