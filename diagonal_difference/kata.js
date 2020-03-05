function diagonalDifference(arr) {
  // assign two variable to hold the sum of the diagonals l to r and r to l
  let sumOne = 0;
  let sumTwo = 0;
  // loop through the array and add the diagonals then return their absolute difference
  for (let i = 0; i < arr.length; i++) {
    // l to r diagonal is [0][0], [1][1], [2][2]
    // r to l digaonal is [0][2], [1][1], [2][0]
    sumOne += arr[i][i];
    sumTwo += arr[i][arr.length - (i + 1)];
  }
  return Math.abs(sumOne - sumTwo);
}

const twoDeeArray = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
console.log(diagonalDifference(twoDeeArray)); // => 15 (11 + 5 + -12 = 4) (4 + 5 + 10 = 19) 4 - 19 = 15
