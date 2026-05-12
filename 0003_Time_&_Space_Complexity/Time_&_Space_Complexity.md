# Time Complexity

Time complexity measures how the runtime of an algorithm grows with input size (**n**).

- It does **NOT** measure actual time in seconds.
- It shows the **trend/behavior** as input increases.

---

## Common Time Complexities

| Complexity | Name         | Meaning (in simple words)      | Example                     |
| ---------- | ------------ | ------------------------------ | --------------------------- |
| O(1)       | Constant     | Always same time               | Access element              |
| O(log n)   | Logarithmic  | Reduces problem size each step | Binary Search               |
| O(n)       | Linear       | Grows with input size          | Linear Search               |
| O(n log n) | Linearithmic | Efficient sorting              | Merge Sort                  |
| O(n²)      | Quadratic    | Nested loops                   | Bubble Sort                 |
| O(2ⁿ)      | Exponential  | Very slow, doubles each step   | Recursion (naive Fibonacci) |

---

## Types of Cases

- **Best Case** → Minimum time
- **Average Case** → Expected time
- **Worst Case** → Maximum time (**most important**)

Typically expressed using **Big O Notation**:

- O(n), O(log n), etc.

---

# Space Complexity

Space complexity measures how much **extra memory** an algorithm uses as input size (**n**) grows.

- It is also denoted using **Big O Notation**.

## Examples

- Access 5th element → **O(1)**
- Find max using a variable → **O(1)**
- Create a new array → **O(n)**
- 2D Matrix → **O(n²)**
