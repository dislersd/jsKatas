## Task

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet `a = (a[0], a[1], a[2])` and the rating for Bob's challenge to be the triplet `b = (b[0], b[1], b[2])`.

Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i] Alice gets 1 point
If a[i] < b[i] Bob gets 1 point
If a[i] === b[i] Neither person gets a point

Create a function named compareTriplets. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

a: an array of integers representing Alice's challenge rating
b: an array of integers representing Bob's challenge rating



### Input Format

two arrays _a_ and _b_

### Output Format

Function must return an array containing two integers the first index being Alice's score and the second index being Bob's score

### Sample Input
```
5 6 7
3 6 10
```
### Sample Output
```
[1,1]
```
### Explanation
a[0] > b[0] (5 > 3) so Alice gets 1 point <br>
a[1] === b[1] (6 === 6) Nobody gets a point <br>
a[2] < b[2] (7 < 10) Bob gets a point