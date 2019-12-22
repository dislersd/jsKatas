## Task

Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from SEA. Thus, the itinerary must begin with SEA.

### Notes

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

### Input Format

array of arrays

### Output Format

Return an array with the ordered trip

### Sample Input
```
[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
```
### Sample Output
```
["JFK","ATL","JFK","SFO","ATL","SFO"]
```

