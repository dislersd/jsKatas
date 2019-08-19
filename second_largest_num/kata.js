// first pass

function getSecondLargest (nums) {
    let uniqueArray = [...new Set(nums)]
    uniqueArray.sort((a,b) => a - b)
    return uniqueArray.slice(-2)[0]
}

console.log(getSecondLargest([1,4,13,5,7,200,10,4,200,7,5])) // => 13

// one liner

const getSecondLargest2 = (nums) => [...new Set(nums)].sort((a,b) => b - a)[1]

console.log(getSecondLargest2([1,80,20,10,120,4,120])) // => 80