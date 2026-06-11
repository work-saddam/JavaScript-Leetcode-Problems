// Insertion Sort is a simple sorting algorithm that works by dividing the list into a sorted and an unsorted part.
// It repeatedly takes one element from the unsorted part and inserts it into its correct position in the sorted part,
//  shifting other elements if necessary.

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      //console.log(arr[prev],curr)
      arr[prev + 1] = arr[prev];
      prev--;
      //console.log(arr)
    }
    arr[prev + 1] = curr;
    //console.log(arr)
  }
  return arr;
}

console.log(insertionSort([1, 4, 7, 4, 3, 4, 0]));
console.log(insertionSort([1, -1, 1, 2, 3, 4]));
console.log(insertionSort([1, 1, 6, 6, 7]));

// Time Complexity: O(n^2)
// Space Complexity: O(1)
