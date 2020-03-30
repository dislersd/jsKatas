function staircase (n) {
  let res = new Array(n).fill(" ")
  for (let i = 0; i < n; i++) {
    res.fill("#", res.length - i - 1)
    console.log(res.join(''))
  }
}

staircase(5)     

// prints following to the console
//     #
//    ##
//   ###
//  ####
// #####