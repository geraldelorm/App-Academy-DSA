function fastFib(n , memo = {}){
    if (n in memo) return memo[n];
    if (n === 1 || n == 2) return 1;

    memo[n] = fastFib(n-1, memo) + fastFib(n-2, memo);

    return memo[n];
}
console.log(fastFib(6));
console.log(fastFib(50));

// Complexity improved to O(n)