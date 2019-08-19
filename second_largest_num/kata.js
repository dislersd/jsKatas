// first pass

function getSecondLargest (nums) {
    let uniqueArray = [...new Set(nums)]
    uniqueArray.sort((a,b) => a - b)
    return uniqueArray.slice(-2)[0]
}

console.log(getSecondLargest([1,4,13,5,7,200,10,4,200,7,5])) // => 13