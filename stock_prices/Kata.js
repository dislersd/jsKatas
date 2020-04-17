const stockPrices = (prices) => {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    // current profit = next days price minus today's price = buying today selling tomorrow
    const currProfit = prices[i + 1] - prices[i];
    // max profit is either your max plus the new current profit or just the max
    maxProfit = Math.max(maxProfit + currProfit, maxProfit);
  }

  return maxProfit;
};

//Input: [7,1,5,3,6,4]
//Output: 7

// Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

console.log(stockPrices([7, 1, 5, 3, 6, 4])); // => 7
