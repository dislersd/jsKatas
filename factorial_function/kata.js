// first pass

const factorial = n => {
    let x = n
    while (x > 1) {
        n = n * (x - 1)
        x -= 1
    } 
    return n
}