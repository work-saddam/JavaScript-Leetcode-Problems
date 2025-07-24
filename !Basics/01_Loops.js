// Factorial:------------------------------------------
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(5));   //120

// Fibonacci Series:--------------------------------------
function printFibonacciSeries(n) {
  function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}
// printFibonacciSeries(5)          //0,1,1,2,3

// Check Prime or not:-------------------------------------------
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
// console.log(isPrime(7))      //true
// console.log(isPrime(10))     //false

// Check Palindrome or not:-----------------------------------------------------
function isPalindrome(num) {
  let temp = num;
  let rev = 0;
  while (temp > 0) {
    lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  return rev === num ? "yes it is a palindrome" : "it is not a palindrome";
}
// console.log(isPalindrome(121))     //yes it is a palindrome
// console.log(isPalindrome(123))     //it is not a palindrome