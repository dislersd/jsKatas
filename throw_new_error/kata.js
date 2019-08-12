function isPositive(a) {
  if (a > 0) {
    return "YES";
  }

  if (a === 0) {
    throw new Error("Zero Error");
  }

  if (a < 0) {
    throw new Error("Negative Error");
  }
}

const nums = [3, 6, 0, -1];

nums.forEach(num => {
  try {
    console.log(isPositive(num));
  } catch (error) {
    console.log(error.message);
  }
});
