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
