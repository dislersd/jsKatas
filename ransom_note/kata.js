let canConstruct = (ransomNote, magazine) => {
  let magMap = new Map();
  for (char of magazine) {
    if (magMap.has(char)) {
      magMap.set(char, magMap.get(char) + 1);
    } else {
      magMap.set(char, 1);
    }
  }

  for (char of ransomNote) {
    if (!magMap.get(char)) {
      return false;
    } else {
      magMap.set(char, magMap.get(char) - 1);
    }
  }
  return true;
};

console.log(canConstruct("cbb", "bbbc")); // => true
