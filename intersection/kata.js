function intersection(arrays) {
  let ht = {};
  let result = [];

  for (let arr of arrays) {
    for (let num of arr) {
      if (ht[num]) {
        ht[num]++;
      } else {
        ht[num] = 1;
      }
    }
  }

  for (let num in ht) {
    if (ht[num] == arrays.length) {
      result.push(num);
    }
  }

  return result;
}

console.log(
  intersection([
    [1, 2, 3, 4],
    [1, 3, 4, 5],
    [1, 3, 5],
  ])
);
