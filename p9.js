'use strict';

function isTriplet(a,b,c) {
  var c1 = a < b && b < c;
  var c2 = Math.pow(a, 2) + Math.pow(b,2) == Math.pow(c,2);
  return c1 && c2;
}

var a = 3, b = 4, c = 5;

var LIMIT = 1000;

for(; a < LIMIT; a++) {
  for(; b < LIMIT; b++) {
    for(; c < LIMIT; c++) {
      if(a + b + c == 1000) {
        if (isTriplet(a,b,c)) {
          console.log('Triplet: %d, %d, %d', a, b, c); 
          console.log('Answer: %d, %d, %d - ', a, b, c, a*b*c);
        }
      }
    }
    c = 5;
  }
  b = 4;
}
