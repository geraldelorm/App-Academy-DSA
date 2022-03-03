function tabulatedFib(n) {
    // create a blank array of length `n`
    let table = new Array(n);

    // seed the first two values
    table[0] = 0;               
    table[1] = 1;

    // complete the table by moving from left to right,
    // following the fibonacci pattern
    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

console.log(tabulatedFib(7));      // => 13

// Time complexity O(n)
// Space complexity O(n)


// We can optimize for constant space by not using a table (i.e array)

smallFib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= n; i++) {
    let temp = last;
    last = last + secondLast;
    secondLast = temp;
  }

  return last;
};
// Time complexity O(n)
// Space complexity O(1)