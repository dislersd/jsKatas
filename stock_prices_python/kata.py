'''
Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
'''

def maxProfit(arr):
  i = 0
  maxProfit = 0

  while i < len(arr) - 1:
    while i < len(arr) - 1 and arr[i] >= arr[i + 1]:
      i += 1
    valley = arr[i]
    while i < len(arr) - 1 and arr[i] <= arr[i + 1]:
      i += 1
    peak = arr[i]
    maxProfit += peak - valley

  return maxProfit


def maxProfit2(prices):
  profit = 0
  for i in range(1, len(prices)):
    if prices[i] > prices[i - 1]:
      profit += prices[i] - prices[i - 1]
  return profit


print(maxProfit([7,1,5,3,6,4]))
print(maxProfit2([7,1,5,3,6,4]))
