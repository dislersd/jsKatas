## Task

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix *_arr_* is shown below:

```
123
456
989
```

The left to right diagonal = 1 + 5 + 9 = 15 <br>
Theright to left diagonal = 3 + 5 + 9 = 17 <br>
Their absolute difference is |15 - 17| = 2

Implement a function called _diagonalDifference_ that takes a 2D array as an argument and returns an integer representing the absolute digonal difference.

### Input Format

2D array _arr_

### Output Format

Function must return an integer representing the absolute digonal difference of the matrix.

### Sample Input
```
[
  [3,2,4],
  [7,5,10],
  [11,12,8]
]
```
### Sample Output
```
4
```
### Explanation
Left to right diagonal is 3 + 5 + 8 = 16 <br>
Right to left diagonal is 4 + 5 + 11 = 20 <br>
Absolute value of 16 - 20 = 4