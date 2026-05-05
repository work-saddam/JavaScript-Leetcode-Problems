// Q. Find the second largest number in the array.

/* ASK:-
    case1: What if the array is empty.
    case2: What if the array contains duplicates.
    case3: What if all the elements in the array are the same.
*/

// Solution:------------------------------------------------------------------------

function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] !== firstLargest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(findSecondLargest([2, 5, 9, 6, 7, 4])); // 7
console.log(findSecondLargest([2, 2, 9, 9, 6, 6])); // 6
console.log(findSecondLargest([2, 2, 2, 2, 2, 2])); // null
console.log(findSecondLargest([])); // null
console.log(findSecondLargest([2])); // null
