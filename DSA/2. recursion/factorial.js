function fact(num) {
  //base case
  if (num === 1) {
    return 1;
  }

  //recursive case
  return num * fact(num - 1);
}

console.log(fact(1)); // 1
console.log(fact(4)); // 24
console.log(fact(5)); // 120

// edge case
// console.log(fact(0)); // == 1
// console.log(fact(-1))

// Complexity O(n)
