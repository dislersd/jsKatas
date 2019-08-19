function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

const rec = new Rectangle(4, 5);

console.log(rec.perimeter); // => 18
