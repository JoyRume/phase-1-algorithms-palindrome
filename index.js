function isPalindrome(word) {
return word === word.split('').reverse().join('')
 }


/* 
  Add your pseudocode here
  The function takes a string word as an input argument.
It splits the string word into an array of characters using word.split('').
It reverses the array using reverse() and then joins the characters back into a string using join('').
Finally, it checks if the reversed string is equal to the original string using ===.

*/

/*
  Add written explanation of your solution here

  and if the reversed string is equal to the original string, the function returns true, 
  indicating that the string is a palindrome. If not, it returns false, indicating that t
  he string is not a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
