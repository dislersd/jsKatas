function countElements (nums: Array<number>) {
  let numCount: number = 0
  for (let num of nums) {
    if (nums.includes(num + 1)) {
      numCount ++
    }
  }
  return numCount
}

console.log(countElements([1,2,3]))