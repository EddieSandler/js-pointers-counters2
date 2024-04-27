function isSubsequence(s1, s2) {
  let i = 0; // Index for s1
  let j = 0; // Index for s2

  // Traverse both strings
  while (j < s2.length) {
      // If characters match, move the index of s1
      if (s1[i] === s2[j]) {
          i++;
      }
      // Always move the index of s2
      j++;
      // If all characters of s1 have been found in order
      if (i === s1.length) {
          return true;
      }
  }
  return false;
}

// Examples
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
