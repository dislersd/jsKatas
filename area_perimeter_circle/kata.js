const PI = Math.PI;

function areaAndPerimeter(r) {
  const area = PI * r ** 2;
  const perimeter = 2 * PI * r;

  return {
    area,
    perimeter
  };
}

console.log(areaAndPerimeter(2.6));
