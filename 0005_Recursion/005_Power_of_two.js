// Leetcode: https://leetcode.com/problems/power-of-two/description/

//using recursion
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  else if (n % 2 !== 0 || n < 1) return false;

  return isPowerOfTwo(n / 2);
};

// using loop;
// var isPowerOfTwo = function (n) {
//   while (n >= 1) {
//     if (n === 1) return true;
//     else if (n % 2 !== 0) return false;

//     n = n / 2;
//   }
//   return false;
// };

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(3));
