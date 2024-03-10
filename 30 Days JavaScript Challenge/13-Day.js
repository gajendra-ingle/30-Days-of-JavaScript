function countLetters(str) {
    // Create an empty object to store the letter counts
    const counts = {};
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is already in the counts object
      if (counts[char]) {
        // If it is, increment the count by 1
        counts[char]++;
      } else {
        // If it's not, add it to the object with a count of 1
        counts[char] = 1;
      }
    }
  
    // Return the counts object
    return counts;
  }
  
  // Example usage:
  const letterCounts = countLetters("JavaScript");
  
  console.log(letterCounts); // Output: { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }