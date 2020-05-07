function firstUniqChar(s) {
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]].num++;
    } else {
      charMap[s[i]] = {
        num: 1,
        index: i,
      };
    }
  }
  for (let el in charMap) {
    if (charMap[el].num < 2) {
      return charMap[el].index;
    }
  }
  return -1;
}

function firstUniqCharTwo(s) {
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]]) {
      charMap[s[i]].num++;
    } else {
      charMap[s[i]] = {
        num: 1,
        index: i,
      };
    }
  }
  for (let el of Object.values(charMap)) {
    if (el.num < 2) {
      return el.index;
    }
  }
  return -1;
}

const t0 = performance.now();
console.log(firstUniqChar("racecar")); // => 3
const t1 = performance.now();
console.log(`${t1 - t0}`);

const t2 = performance.now();
console.log(firstUniqCharTwo("racecar")); // => 3
const t3 = performance.now();
console.log(`${t3 - t2}`);

// about the same runtime




























