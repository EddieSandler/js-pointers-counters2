function pivotIndex(nums) {
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
      // Right sum excludes the element at the current index
      let rightSum = totalSum - leftSum - nums[i];

      // Check if the left sum equals the right sum
      if (leftSum === rightSum) {
          return i;
      }

      // Update the left sum to include the current element
      leftSum += nums[i];
  }

  return -1; // No pivot index found
}

// Example usage:
console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // 3
