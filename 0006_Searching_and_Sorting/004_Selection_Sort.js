// Selection Sort repeatedly selects the minimum element from the unsorted part and places it at the correct index.

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1, 4, 7, 4, 3, 4, 0]));
console.log(selectionSort([1, -1, 1, 2, 3, 4]));
console.log(selectionSort([1, 1, 6, 6, 7]));

// Time Complexity: O(n^2)
// Space Complexity: O(1)
