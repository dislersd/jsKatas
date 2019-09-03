class Polygon {
    constructor (sides) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce((total, side) => total + side)
    }
}

const triangle = new Polygon([2,3,5])

console.log(triangle.perimeter()) // => 10