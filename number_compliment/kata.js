var findComplement = function(num) {
    
  let bin = (num >>> 0).toString(2);
  bin = [...bin].map(num => num === '0' ? '1' : '0')
  return parseInt(bin.join(''), 2);

};

console.log(findComplement(5)); // => 2