// Q. isPalindrome

// ASK:
// what if the num is 0 or only one digit.
// what if the num is negative.

// Solution:
function isPalindrome(num) {
  // if(num<1){
  //   return false
  // }

  let temp = num;
  let reverseNum = 0;

  while (temp > 0) {
    let remainder = temp % 10;
    reverseNum = reverseNum * 10 + remainder;
    temp = Math.floor(temp / 10);
  }
  return reverseNum === num ? true : false;
  // return reverseNum
}

console.log(isPalindrome(121)); // true   // 121
console.log(isPalindrome(0)); // true   // 0
console.log(isPalindrome(5)); // true   // 5
console.log(isPalindrome(10)); // false  // 1
console.log(isPalindrome(-121)); //false  // 0
