const maxSubArray = (arr) => {
  let currentMax = -Infinity
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], arr[i] + currentMax);
    max = Math.max(currentMax, max)
  }
  return max
}

const array = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(array)) // => 6