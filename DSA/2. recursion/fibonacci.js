function fib(num) {
  //base case
  if (num === 1 || num == 2) {
    return 1;
  }

  //recursive case
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13

// edge case
// console.log(fib(0));
// console.log(fib(-1));

// Complexity O(2^n)
