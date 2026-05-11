// Q. Reverse the Integer

function reverseInteger(num) {
  let temp = Math.abs(num);
  let reverseNum = 0;

  while (temp > 0) {
    let remainder = temp % 10;
    reverseNum = reverseNum * 10 + remainder;
    temp = Math.floor(temp / 10);
  }
  return num >= 0 ? reverseNum : -reverseNum;
}

console.log(reverseInteger(121)); // 121
console.log(reverseInteger(0)); // 0
console.log(reverseInteger(5)); // 5
console.log(reverseInteger(10)); // 1
console.log(reverseInteger(-123)); // -321
