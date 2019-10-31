/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100\
-----------------------------------

1 split 

2 join the minimumm array 
3 find the max and the min 

 */

function mysteryRange (inputString, range) {
    var arr = inputString.split('');
    var i = 1;
    var j = 0;
    while (arr.length !== range) {
       
        if (i == arr[j]) {
            arr.splice(j, 2, i+arr[j+1])
        }
        if (j === arr.length-1) {
            j = 0
            i++
        } 
        j++
    }

         arr = arr.map(function (element) {
            
       return Number(element)

   })
         
    arr.sort(function (a,b){return a-b}).splice(1, arr.length-2)
    return arr

 }