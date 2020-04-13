function singleNumber (arr) {
  let s = new Set()

  for (let num of arr) {
    if (s.has(num)) {
      s.delete(num)
    } else {
      s.add(num)
    }
  }
return s.values().next().value
}

console.log(singleNumber([2,2,1])) // => 1