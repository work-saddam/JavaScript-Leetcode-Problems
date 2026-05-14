//Q.  Reverse String
//leetcode link: https://leetcode.com/problems/reverse-string/description/

/**
 * @description
 * 
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 */

//Solution:-----------------------------------------------
function reverseString(s) {
  let n = s.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"])); //["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); //["h","a","n","n","a","H"]
