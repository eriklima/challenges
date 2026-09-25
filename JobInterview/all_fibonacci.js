// 1 2 3 4 5 6 7 8  9  10
// 0 1 1 2 3 5 8 13 21 34

// --------------------------------------------------------------

function fib4(n) {
  function fibDoubling(n) {
    if (n === 0n) {
      return [0n, 1n];
    }

    const [a, b] = fibDoubling(n / 2n);

    const c = a * (2n * b - a);
    const d = a * a + b * b;

    if (n % 2n === 0n) {
      return [c, d];
    }

    return [d, c + d];
  }

  return fibDoubling(BigInt(n))[0];
}

console.log(fib4(100));

// --------------------------------------------------------------

function fib3(n) {
  if (n == 0) {
    console.log(0);
    return n;
  }

  let prev = 0n;
  let curr = 1n;

  console.log(0);
  console.log(1);

  // for (let i = 2; i <= n; i++) {
  //   const next = prev + curr;
  //   prev = curr;
  //   curr = next;
  //   console.log(next);
  // }

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
    console.log(curr);
  }

  return curr;
}

console.log(fib3(100));

// --------------------------------------------------------------

function fib2(n) {
  function fibMemo(n, memo = [0, 1]) {
    if (n <= 1) {
      return n;
    }

    if (memo[n]) {
      return memo[n];
    }

    memo[n] = fibMemo(n - 2n, memo) + fibMemo(n - 1n, memo);

    console.log(memo);

    return memo[n];
  }
  return fibMemo(BigInt(n));
}

console.log(fib2(100));

// --------------------------------------------------------------

function fib1(n) {
  if (n <= 1) {
    return n;
  }

  return fib1(n - 2) + fib1(n - 1);
}

console.log(fib1(10));

// --------------------------------------------------------------
