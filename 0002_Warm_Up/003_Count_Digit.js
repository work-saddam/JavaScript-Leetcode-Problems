// Qus. count the digits.

// ASK:
// what if the num is 0.
// what if the num is negative

// Solution:
function countDigit(num) {
  if (num === 0) return 1;

  num = Math.abs(num);

  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

console.log(countDigit(234)); //3
console.log(countDigit(0)); //1
console.log(countDigit(-123)); //3
