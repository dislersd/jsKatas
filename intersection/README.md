# Intersections of Multiple arrays

Find the intersection between multiple arrays of integers.

We're given an array of arrays that contain integers:

```javascript
[
  [1, 2, 3, 4, 5],
  [12, 7, 2, 9, 1],
  [99, 2, 7, 1],
];
```

And we need to compute the _intersection_, that is, numbers that exist
in all arrays.

From the above input, the return value will be:

```
[1, 2]
```

Because those are the numbers that exist in all the arrays.

(Output can be in any order.)

Limits:

- There can be up to 10 arrays in the array of arrays.
- The arrays can contain up to roughly 1,000,000 elements each.
