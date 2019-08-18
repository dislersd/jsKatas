const setOne = new Set(["a", "e", "i", "o", "u"]);
const setTwo = new Set(["b", "c", "d", "f", "g"]);
const setThree = new Set(["h", "j", "k", "l", "m"]);
const setFour = new Set([
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z"
]);

function getLetter(s) {
  let letter;
  const first = s[0];

  switch (true) {
    case setOne.has(first):
      letter = "A";
      break;
    case setTwo.has(first):
      letter = "B";
      break;
    case setThree.has(first):
      letter = "C";
      break;
    case setFour.has(first):
      letter = "D";
      break;
    default:
      console.log("Please provide a string of english letters");
  }
  return letter;
}

console.log(getLetter('javascript')) // => 'C'