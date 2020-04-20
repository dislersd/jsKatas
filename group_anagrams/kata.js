function groupAnagrams (strings) {
  let res = []
  let strMap = {}
  for (let str of strings) {
    if (!strMap[str]) {
      strMap[str] = [str]
    } else if (strMap[[...str].sort().join('')]) {
      strMap[str].push(str)
    }
  }
  strMap
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])



        //  v        
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// grouped by simialar characters
// if all characters are the same in two words they go together
// for each string -> for each char -> compare to each char of every other string
// if 



let x = {
  eat: ['ate','tea'],
  tea: [],
  tan: [],
  ate: [],
  nat: [],
  bat: []
}

