'use strict';

var sum = 0;
var cache = { 1: 1, 2: 2 };

function fib(n) {
  /*
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  }
  */
  if(cache[n]) {
    return cache[n];
  }

  var sum = fib(n-1) + fib(n-2);
  cache[n] = sum;

  return sum; 
}

function doFib(limit) {
  var evenSum = 0;
  var i = 1;
  var nthFib = 0;
  do {
    nthFib = fib(i);
    if (nthFib % 2 == 0) {
      evenSum += nthFib;
    }
    i++;
  } while (nthFib < 4e6);

  return evenSum;
}

console.log(doFib(4e6));
