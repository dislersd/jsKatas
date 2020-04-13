const isHappy = (n) => {
  for (let i = 0; i < 10; i++) {
    let num = n;
    let nArr = [];
    while (num > 0) {
      nArr.push(Math.pow(num % 10, 2));
      num = Math.floor(num / 10);
    }

    n = nArr.reduce((total, current) => total + current, 0);
    if (n === 1) return true;
  }
  return false;
};
