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

// find duplicate element in array (without sort):----------------------------------------------
function findDuplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        let isPresent = false;
        for (let k = 0; k < res.length; k++) {
          if (arr[i] === res[k]) {
            isPresent = true;
            break;
          }
        }
        if (!isPresent) {
          res.push(arr[i]);
        }
      }
    }
  }
  return res;
}
// console.log(findDuplicate([2, 2, 2, 2, 2]));                //[2]
// console.log(findDuplicate([1, 2, 2, 3, 4, 4, 4, 5, 5]));    //[2,4,5]
// console.log(findDuplicate([1, 2, 3]));                      //[]

// Bubble Sorting (https://www.youtube.com/watch?v=p__ETf2CKY4&t):----------------------------------
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let flag = 0;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag === 0) {
      break;
    }
  }
  return arr;
}
// console.log(bubbleSort([5, 3, 7, 8, 3, 1]))   // [ 1, 3, 3, 5, 7, 8 ]

// Count Occurrences of Each Element:----------------------------------------------------------
function occurence(arr) {
  let count = {};
  for (let ele of arr) {
    count[ele] = (count[ele] || 0) + 1;
  }
  return count;
}
// console.log(occurence([2, 2, 2, 2, 2]));  // { '2': 5 }
// console.log(occurence([1, 2, 2, 3, 4, 4, 4, 5, 5]));  // { '1': 1, '2': 2, '3': 1, '4': 3, '5': 2 }
// console.log(occurence([1, 2, 3]));  // { '1': 1, '2': 1, '3': 1 }

// Find Missing Number in Array (1 to N):--------------------------------------------------------
function missingNum(arr) {
  let n = arr.length;
  for (let i = 1; i <= n; i++) {
    isPresent = false;
    for (let j = 0; j < n; j++) {
      if (i === arr[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      return i;
    }
  }
  return -1;
}
// console.log(missingNum([8, 2, 4, 5, 3, 7, 1]));     // 6
// console.log(missingNum([8, 2, 4, 5, 6, 3, 7, 1]));  // -1

// Flattening Nested Arrays:-----------------------------------------------------------------
// Using Recursion!!
// n = depth
function flat(arr, n) {
  if (n === 0) {
    return arr;
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (n > 0 && Array.isArray(arr[i])) {
      result.push(...flat(arr[i], n - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(flat([1,2,[3,4],[5,[6,7],8],9], 1))     // [ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9 ]
// console.log(flat([1,2,[3,4],[5,[6,7],8],9], 2))     //  [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flat([1,2,[3,4],[5,[6,7],8],9], 3))     //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

// merge two sorted arrays in js:----------------------------------------------------------
function mergeSortedArrays(arr1, arr2) {
  const mergeArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < arr1.length) {
    mergeArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < arr2[j]) {
    mergeArray.push(arr2[j]);
    j++;
  }

  return mergeArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 6, 8];
const result = mergeSortedArrays(array1, array2);
// console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
