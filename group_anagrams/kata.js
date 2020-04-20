function groupAnagrams (strings) {
  let strMap = {}
  for (let str of strings) {
    if (!strMap[[...str].sort().join('')]) {
      strMap[[...str].sort().join('')] = [str]
    } else {
      strMap[[...str].sort().join('')].push(str)
    }
  }
  return Object.values(strMap)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // => [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]