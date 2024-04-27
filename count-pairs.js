// add whatever parameters you deem necessary
function countPairs(arr, num) {
  //sort array
  //initialize right and left pointers
  //initialize counter
  //if sume of right/left elements = num add to counter
  //retur counter
  const sorted = arr.sort((a,b)=>a-b);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let counter = 0;

  while (leftIndex < rightIndex) {
    let sum = sorted[leftIndex] + sorted[rightIndex]
    if (sum === num) {
      counter++;
      leftIndex++;
      rightIndex--;
    } else if(sum < num){
      leftIndex++
    } else{
      rightIndex --
    }

  }

  return counter;
}


console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([0, -4], -4)); // 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2
