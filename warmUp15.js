// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(argument) {
	// body...
	var arr = argument.split(' ');
	var array = [];

	for (var i = arr.length - 1; i >= 0; i--) {
		array.push(arr[i]);
	}
	return array.join(' ');
}

function reverseStr2(argument) {
	// body...
	var arr = [];
	for (var i = argument.length - 1; i >= 0; i--) {
		arr.push(argument[i]);
	}
	return arr.join('');
}