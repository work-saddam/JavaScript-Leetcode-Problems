// 912. Sort an Array
// Leetcode: https://leetcode.com/problems/sort-an-array/description/

// It follows the Divide & Conquer Algorithm.
// Merge Sort follows a simple philosophy:
//  1. Divide the array into halves
//  2. Sort each half recursively
//  3. Merge the sorted halves back together

function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));

  return merge(left, right);
}

// function to merge two sorted array
function merge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  return res;
}

console.log(mergeSort([2, 5, 1, 3, 7]));
console.log(mergeSort([1, 4, 7, 4, 3, 4, 0]));
console.log(mergeSort([1, -1, 1, 2, 3, 4]));
console.log(mergeSort([1, 1, 6, 6, 7]));

// Time Complexity: O(n log n)
// Space Complexity : O(n)
