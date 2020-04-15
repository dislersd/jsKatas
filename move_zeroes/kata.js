const moveZeroes = function (nums) {
  let count = 0;
  for (num of nums) {
    if (num === 0) {
      count++;
    }
  }

  // return new aray spreading in filtered array removing zeros and spreading in zeros
  return [...nums.filter((num) => num !== 0), ...Array(count).fill(0)];
};

// gets zeroes to the end of array but does not keep relative order of the rest of the numbers
const moveZeroesInPlace1 = function (nums) {
  let base = nums.length - 1;

  while (base > 0) {
    for (let i = base; i >= 0; i--) {
      if (nums[i] === 0) {
        [nums[i], nums[base]] = [nums[base], nums[i]];
      }
    }
    base--;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // => [1,3,12,0,0]

console.log(moveZeroesInPlace1([0, 1, 0, 3, 12])); // => [3,1,12,0,0]
