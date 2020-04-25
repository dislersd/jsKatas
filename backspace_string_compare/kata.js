const backspace = (s, t) => {
  let sArr = [...s]; // [a,b,#,c]
  let tArr = [...t]; // [a,d,#,c]

  if (sArr[0] === "#") {
    sArr.shift();
  }
  if (tArr[0] === "#") {
    tArr.shift();
  }

  console.log(sArr.join(""))
  console.log(tArr.join(""))

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

console.log(backspace("a##c", "#a#c")); // => true
