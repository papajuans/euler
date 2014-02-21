'use strict';

var primes = [];

function isPrime(n) {
  if (isNaN(n) || n % 1 || n < 2) return false;
  if (n % 2 == 0) return (n == 2);
  if (n % 3 == 0) return (n == 3);

  var m = Math.sqrt(n);

  for (var i = 5; i <= m; i += 6) {
    if (n % i == 0) return false;
    if (n % (i + 2) == 0) return false;
  }

  return true;
}

function findNth(n) {
  var count = 1;
  var i = 2;
  var answer = 0;

  while (count < n) {

    if (i % 2 == 0) {
      i++;
      continue;
    }

   
    if (isPrime(i)) {
      count++;
      answer = i;
      console.log('%d is prime, count at %d', i, count);
    }

    i++;
  }

  return answer;
}

console.log(findNth(10001));
