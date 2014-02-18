'use strict';

var sum = 0;

for (var i = 0; i < 1e3; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(sum);
