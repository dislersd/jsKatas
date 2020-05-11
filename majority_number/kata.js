var majorityElement = function (nums) {
  let nMap = {};
  console.log(Math.floor(nums.length / 2));
  for (let num of nums) {
    if (nMap[num]) {
      nMap[num]++;
    } else {
      nMap[num] = 1;
    }

    if (nMap[num] >= Math.floor(nums.length / 2)) {
      return num;
    }
  }
  return "there is no majority num";
};

console.log(majorityElement([3, 2, 3, 4, 1])); // => 3
