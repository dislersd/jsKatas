function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    } else if (arr[i] < 0) {
      negCount++;
    } else {
      zCount++;
    }
  }

  return {
    pos: posCount / arr.length,
    neg: negCount / arr.length,
    z: zCount / arr.length
  };
}

const arraya = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arraya)) // { { pos: 0.5, neg: 0.333, z: 0.1666}