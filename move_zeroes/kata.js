const moveZeroes = function (nums) {
  let count = 0
  for (num of nums) {
    if (num === 0) {
      count ++
    }
  }

  return [...nums.filter(num => num !== 0), ...Array(count).fill(0)]
}

console.log(moveZeroes([0,1,0,3,12]))