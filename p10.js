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

var LIMIT = 2e6;

var sum = 0;

for(var i = 2; i < LIMIT; i++) {
  if(isPrime(i)) {
    sum += i;
    console.log('adding %d, %d', i, sum);
  }
}

console.log('Sum',sum);
