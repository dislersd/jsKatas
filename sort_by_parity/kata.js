function sortArrayByParity(A) {
  let res = [];

  for (let num of A) {
    if (num % 2 != 0) {
      res.push(num);
    } else {
      res.unshift(num);
    }
  }

  return res;
}

console.log(sortArrayByParity([3, 1, 2, 4])); // => [4,2,3,1]
