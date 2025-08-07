// Reversing an Array:------------------------------------------------
function revArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }
  return arr;
}
// console.log(revArray([2, 4, 7, 3, 4]));    // [4,3,7,4,2]

// Find Second Maximum and Minimum number in array:-----------------------------------------
function secondMaxMin(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;
  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    //For max
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }

    //For min
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] > min && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  console.log("secondMax: ", secondMax);
  console.log("secondMin: ", secondMin);
}
// secondMaxMin([2, 4, 3, 7, 5, 4, 8]);    // secondMax: 7 || secondMin: 3

// k-th largest/smallest element.:----------------------------------------------
// not good approach for interviews!!!
function k_thLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}
// console.log(k_thLargest([1,2,4,7,336,32,29], 4))     // 7

// Remove duplicates element from Array:----------------------------------------------------
function removeDuplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    isPresent = false;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(removeDuplicate([2,2,2,2,2]))                     // [2]
// console.log(removeDuplicate([1 ,2, 2, 3, 4, 4, 4, 5, 5]))     // [1,2,3,4,5]
// console.log(removeDuplicate([1,2,3]))                         // [1,2,3]
