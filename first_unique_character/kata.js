function firstUniqChar (s) {
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]].num ++
    } else {
      charMap[s[i]] = {
        num: 1,
        index: i
      }
    }
  }
  for (el of Object.values(charMap)) {
    if (el.num < 2) {
      return el.index
    }
  }
  return -1
}

console.log(firstUniqChar('racecar')) // => 3