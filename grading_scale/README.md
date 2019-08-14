## Task

Implement a function named _getGrade_ that takes a single parameter: an integer _score_, denoting the points a student earned on an exam. The function must return the letter corresponding to their _grade_ according to the following rules
* if 25 < _score_ < 30: _grade_ = *A*
* if 20 < _score_ < 25: _grade_ = *B*
* if 15 < _score_ < 20: _grade_ = *C*
* if 10 < _score_ < 15: _grade_ = *D*
* if 5 < _score_ < 10: _grade_ = *E*
* if 0 < _score_ < 5: _grade_ = *F*

### Input Format

single Number _score_

### Output Format

Function must return the value of *grade*

### Sample Input
```
11
```
### Sample Output
```
D
```
### Explanation
_score_ = 11\
satisfies the condition:
```
10 < score < 15
```
 which corresponds to _grade_ = D