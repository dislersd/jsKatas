## Task

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

### Input Format

two strings _J_ and _S_

### Output Format

Function must return the number of characters in _S_ that match the characters in _J_

### Sample Input
```
"aA", "aAAbbbb"
```
### Sample Output
```
3
```
### Explanation
The string _S_ contains 1 "a" and 2 "A"s (String _J_ contains "aA")