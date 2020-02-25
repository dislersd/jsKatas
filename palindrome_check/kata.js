function palindromeCheck(word) {
  // a palindrome will never have more than one odd count of letters
  // loop over string and keep a count of how many of each letter are present in the string

  let charCount = {};

  for (let char of word) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 === 1) {
      oddCount++;
    }

    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}

console.log(palindromeCheck("racecar")); // => true
console.log(palindromeCheck("banana")); // => false
console.log(palindromeCheck("aaxxbba")); // => false


