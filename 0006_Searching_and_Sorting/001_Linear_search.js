function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 5, 8, 0, 4], 8));

// Time Complexity: O(n)
// Space Complexity: O(1)
