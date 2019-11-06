// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function balloon(argument) {
	// body...
	var resulte = 0;
	var array = [];
	var arr = argument.split('')
for (var i = 0; i <  arr.length; i++) {
	if ("balloon".includes(arr[i])) {
		array .push(arr[i])
	}
}
if (array.length % 7 === 0) {
	resulte = array.length / 7;
}
return resulte
}
