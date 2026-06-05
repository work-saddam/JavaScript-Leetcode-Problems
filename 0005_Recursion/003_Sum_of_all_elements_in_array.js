function sumOfEle(arr, n = arr.length - 1) {
  if (n === 0) return arr[0];
  return arr[n] + sumOfEle(arr, n - 1);
}

// function sumOfEle(arr, i = 0) {
//   if (i === arr.length - 1) return arr[i];
//   return arr[i] + sumOfEle(arr, ++i);
// }

// function sumOfEle(arr){
//   if(arr.length===1) return arr[0]
//   let lastElement = arr.pop()
//   return lastElement+sumOfEle(arr)
// }

console.log(sumOfEle([1, 2, 5, 4, 3])); //15

// 003.2_Sum_of_all_odd_elements_in_array

function sumOfOddEle(arr, n = arr.length - 1) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + sumOfOddEle(arr, n - 1);
}

console.log(sumOfOddEle([2, 2, 5, 4, 3, 4, 1])); //9
