// naive solution

const backspace = (s, t) => {
  let sArr = [...s]; // [a,b,#,c]
  let tArr = [...t]; // [a,d,#,c]

  if (sArr[0] === "#") {
    sArr.shift();
  }
  if (tArr[0] === "#") {
    tArr.shift();
  }

  for (let i = 0; i < Math.max(sArr.length, tArr.length); i++) {
    if (sArr[i] === "#") {
      sArr.splice(i - 1, 2);
      i = 0;
    }

    if (tArr[i] === "#") {
      tArr.splice(i - 1, 2);
      i = 0;
    }

    if (sArr[0] === "#") {
      sArr.shift();
    }

    if (tArr[0] === "#") {
      tArr.shift();
    }
  }

  if (sArr.join("") === tArr.join("")) {
    return true;
  } else {
    return false;
  }
};

// Better solution using O(1) space

const backspaceBetter = (S, T) => {
  let i = S.length - 1;
  let j = T.length - 1;
  let back;

  while (true) {
    while (i >= 0 && (back > 0 || S[i] === "#")) {
      S[i] === "#" ? back++ : back--;
      i--;
    }
    back = 0;
    while (j >= 0 && (back > 0 || T[j] === "#")) {
      T[j] === "#" ? back++ : back--;
      j--;
    }

    if (i >= 0 && j >= 0 && S[i] == T[j]) {
      i--;
      j--;
    } else {
      break;
    }
  }
  return i === -1 && j === -1;
};

console.log(backspace("a##c", "#a#c")); // => true
console.log(backspaceBetter("a###cf", "#a#cf")); // => true