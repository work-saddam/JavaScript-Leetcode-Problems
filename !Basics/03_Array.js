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