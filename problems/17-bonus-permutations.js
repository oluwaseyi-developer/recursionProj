/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function permute(arr, i, n) {
  if (i === n) {
      // Base case: Print the permutation when we reach the end of the array
      console.log(arr);
  } else {
      for (let j = i; j <= n; j++) {
          // Swap elements to generate permutations
          swap(arr, i, j);
          permute(arr, i + 1, n);
          // Backtrack by swapping back to the original order
          swap(arr, i, j);
      }
  }
}

function permutations(array) {
  permute(array, 0, array.length - 1);
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
