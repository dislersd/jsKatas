## Task

Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

For example, given the array [1,1,0,-1,-1] there are 6 elements, two positive, two negative and one zero. Their ratios would be 2/5 = 0.4, 2/5 = 0.4 and 1/5 = 0.2.


Implement a function called plusMinus that takes an array of integers and returns the ratios of the positive nums, negative nums, and zeros in the array.

### Input Format

array _arr_

### Output Format

object containing the three ratios _pos_, _neg_, _z_

### Sample Input
```
[-4, 3, -9, 0, 4, 1]
```
### Sample Output
```
{
  pos: 0.5,
  neg: 0.333,
  z: 1.6
}
```
### Explanation
There are three positives out of the total of six integers so 3/6 = 0.5 <br>
There are two negatives out of the total of six integers so 2/6 = 0.333 <br>
There is one zero out of the total of six integers so 1/6 = 0.16