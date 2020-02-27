function compareTheTriplets (a, b) {
  const scores = [0,0]

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      scores[0]++
    } else if (a[i] < b[i]) {
      scores[1]++
    }
  }
  return scores
}

alice = [5,6,7]
bob = [3,6,10]

console.log(compareTheTriplets(alice, bob))