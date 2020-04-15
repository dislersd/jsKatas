const moveZeroes = function (nums) {
  let count = 0
  for (num of nums) {
    if (num === 0) {
      count ++
    }
  }

  // return new aray spreading in filtered array removing zeros and spreading in zeros
  return [...nums.filter(num => num !== 0), ...Array(count).fill(0)]
}

console.log(moveZeroes([0,1,0,3,12])) // => [1,3,12,0,0]