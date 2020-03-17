function reverseString(str) {
  // create a pointer that starts at the end of the str
  let p2 = str.length - 1;
  // spread str characters into an array
  let strArr = [...str];
  // loop halfway through array (because looping all the way and swapping chars would result in the a non reversed word)
  for (let i = 0; i < strArr.length / 2; i++) {
    // save temp variable of char at index i
    let tmp = strArr[i];
    // char at index i becomes char at index p2
    strArr[i] = strArr[p2];
    // char at index p2 becomes the temp variable
    strArr[p2] = tmp;
    // decrement the pointer from the end of the word
    p2--;
  }

  // could use the .join() method but without using any methods we can loop through array of chars and build new string
  let result = "";
  for (let char of strArr) {
    result += char;
  }
  return result;
}

console.log(reverseString("banana")); // => ananab


// another way without using an array
const reverseStr = str => {
  let newStr = '';
  for (let i in str) {
    newStr = str[i] + newStr
  }
  return newStr
}

console.log(reverseStr('hello')) // => olleh



