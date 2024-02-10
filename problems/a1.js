function sort(nums, sorted = []) {
    /**
     * Recursively sorts an array of integers.
     *
     * @param {Array} nums - The input array of integers.
     * @param {Array} sorted - The currently sorted elements (default empty array).
     * @returns {Array} - A sorted array containing all integers.
     */
    if (nums.length === 0) {
        return sorted;
    }

    const smallest = Math.min(...nums);
    sorted.push(smallest);

    // Remove the smallest element from nums
    const index = nums.indexOf(smallest);
    nums.splice(index, 1);

    return sort(nums, sorted);
}

console.log(sort([4,1,6,3,1,7]));