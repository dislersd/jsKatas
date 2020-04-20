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

const stockPrices2 = (prices) => {
  let maxProfit = 0;
  for (i = 0; i < prices.length - 1; i++) {
    // if current price is less than tomorrow's
    if (prices[i] < prices[i + 1]) {
      // max profit = max profit + buy today and sell tomorrow
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
};

//Input: [7,1,5,3,6,4]
//Output: 7

// Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

console.log(stockPrices([7, 1, 5, 3, 6, 4])); // => 7
console.log(stockPrices2([7, 1, 5, 3, 6, 4])); // => 7
