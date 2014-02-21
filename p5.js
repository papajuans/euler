'use strict';

function lcm(a,b) {
  return (a * b) / (gcd(a,b));
}

function gcd(a,b) {

}

function brute() {
  
  function isCleanlyDivisible(m) {
    var divisors = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (var i = 0; i < divisors.length; i++) {
      if(m % divisors[i])
        return false
    }
    
    return true;
  }

  var i = 11;

  while (!isCleanlyDivisible(i)) {
    i++;
  }

  return i;
}

console.log(brute());
