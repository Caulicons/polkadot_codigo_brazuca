function fibonacci(n) {
  let n1 = 0, n2 = 1, nextTerm;

  console.log('Fibonacci Series:');
  console.log(n1); // print 0
  console.log(n2); // print 1
  nextTerm = n1 + n2;
  while (nextTerm < n) {
    console.log(nextTerm);

    n1 = n2
    n2 = nextTerm
    nextTerm = n1 + n2
  }
}

fibonacci(50)
