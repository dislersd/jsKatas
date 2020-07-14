'''
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
'''

# O(n x k) Each number is shifted one space k times
def rotate(arr, k):
  k %= len(arr)

  for i in range(k):
      prev = arr[-1]
      for j in range(len(arr)):
          arr[j], prev = prev, arr[j]
  return arr

# O(n) time and O(n) space
def rotate2(nums, k):
  arr = [0] * len(nums)
  for i in range(len(nums)):
    arr[(i + k) % len(nums)] = nums[i]
  
#O(n) and O(1) space


print(rotate2([1, 2, 3, 4, 5, 6, 7], 3))
