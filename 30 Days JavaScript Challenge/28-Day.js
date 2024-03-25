function containsOnlyAlphabets(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
  }
  
  console.log(containsOnlyAlphabets("abcDEF")); // true
  console.log(containsOnlyAlphabets("123")); // false
  console.log(containsOnlyAlphabets("a b c")); // false
  console.log(containsOnlyAlphabets("")); // false