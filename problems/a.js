function sort(nums, sorted = []) {
  if(nums.length === 0) {
    return sorted;
  }

  let curentEle = nums[0];
  let nextEle = nums[1];

  if(nextEle < curentEle) {
    sorted.push(nextEle);
    nums.splice(1,1);
  }else {
    sorted.push(curentEle);
    nums.splice(0,1);
  }


  let currentSortedEle = sorted[(sorted.length - 1)];
  let previousSortedEle = sorted[(sorted.length - 1) - 1];

  if(currentSortedEle < previousSortedEle) {
    let leastNumber = currentSortedEle;
    currentSortedEle = previousSortedEle;
    previousSortedEle = leastNumber;
  }

  //console.log(currentSortedEle);
  //console.log(previousSortedEle);

  //console.log(`nums = [${nums}]`);
  //console.log(`sortedarray = [${sorted}]`);


  return sort(nums, sorted);

}

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
//console.log(sort([0, 1, -3])); // [-3, 0, 1]
//console.log(sort([])); // []