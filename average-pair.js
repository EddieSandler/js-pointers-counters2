// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  //create left and right pointers
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  //iterate through array while left index is less than right index
  while (leftIndex < rightIndex) {
    //compare right/left array elements
    let average = (arr[leftIndex] + arr[rightIndex]) / 2;
    //if avg equals the given verage- return true
    if (average === avg) {
      return true;
    } else if (average > avg) {
      rightIndex--;

    } else {
      leftIndex++;
    }


  }
return false
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false