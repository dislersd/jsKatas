// first pass

const factorial = n => {
  let x = n;
  while (x > 1) {
    n = n * (x - 1);
    x -= 1;
  }
  return n;
};

// recursive (with ternary)

const factorialRecursive = n => {
  return n ? n * factorialRecursive(n - 1) : 1;
};
