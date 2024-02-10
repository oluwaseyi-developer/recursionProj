/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(arr) {
  function backtrack(index, currentSubset) {
      // Base case: Add the current subset to the result array
      result.push([...currentSubset]);

      // Explore choices for the next element
      for (let i = index; i < arr.length; i++) {
          currentSubset.push(arr[i]);
          backtrack(i + 1, currentSubset);
          currentSubset.pop(); // Backtrack (exclude the current element)
      }
  }

  const result = [];
  backtrack(0, []); // Start with an empty subset at index 0
  return result;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
