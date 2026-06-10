// Bubble Sort repeatedly compares adjacent elements and swaps them when necessary,
// causing the largest element to “bubble up” to its correct position after each pass.

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    // If no swaps, array is already sorted
    if (!isSwapped) {
      //   console.log("already sorted where i:",i)
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([1, 4, 7, 4, 3, 4, 0]));
console.log(bubbleSort([1, -1, 1, 2, 3, 4]));

// Time Complexity: O(n^2)
// Space Complexity: O(1)
