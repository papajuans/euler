'use strict';

function makeRange(a,b) {
  var foo = [];

  for (var i = a; i <= b; i++) {
    foo.push(i);
  }

  return foo;
}

function sumSquare(nums) {
  var squares = nums.map(function(i) {
    return i * i;
  });

  var sum = squares.reduce(function(prev, curr, index, array) {
    return prev + curr;
  });

  return sum;
}

function squareSum(nums) {
  var sum = nums.reduce(function(prev, curr, index, array) {
    return prev + curr;
  });

  return sum * sum;
}

var a = makeRange(1,100);
var diff = squareSum(a) - sumSquare(a);

console.log(diff);

