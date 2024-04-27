// add whatever parameters you deem necessary
function longestFall(nums) {
  if (nums.length === 0) return 0; // Handle empty array edge case

  let maxLength = 1; // At least every single element can be considered as a decreasing sequence
  let currentLength = 1; // Start by considering the first element as a sequence

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          // If current number is less than the previous, it's part of a decreasing sequence
          currentLength++;
      } else {
          // If not, reset the current sequence length
          currentLength = 1;
      }
      // Update the maximum length found so far
      if (currentLength > maxLength) {
          maxLength = currentLength;
      }
  }

  return maxLength;
}

// Example usage:
console.log(longestFall([5, 3, 1, 3, 0])); // 3
console.log(longestFall([2, 2, 1])); // 2
console.log(longestFall([2, 2, 2])); // 1
console.log(longestFall([5, 4, 4, 4, 3, 2])); // 3
console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])); // 5
console.log(longestFall([])); // 0
