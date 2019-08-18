## Task

Implement a function named _getLetter_ that takes a single parameter: a string _s_, consisting of lowercase English alphabetic letters. The function must return A, B, C, or D depending on the following criteria:

* If the first character in string _s_ is in the set {a,e,i,o,u} , then return A.
* If the first character in string _s_ is in the set {b,c,d,f,g}, then return B.
* If the first character in string _s_ is in the set {h,j,k,l,m}, then return C.
* If the first character in string _s_ is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.

Use a switch statement to determine which letter your function will return

### Input Format

String _s_

### Output Format

Function must return A, B, C, or D

### Sample Input
```
'dolphin'
```
### Sample Output
```
B
```
### Explanation
_s_ = 'dolphin'\
The first character of dolphin is d\
According to our criteria it returns B