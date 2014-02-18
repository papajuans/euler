'use strict';

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

function findPrimes(n) {
  var p = [];

  var limit = Math.floor(Math.sqrt(n));

  var i = 2;
  for (; i < limit; i ++) {
    if (isPrime(i) && n % i == 0) {
      p.push(i);
    }
  }

  return p;
}

console.log(findPrimes(600851475143));
