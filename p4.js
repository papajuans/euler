'use strict';

function isPalindrome(n) {
  // coerce to a string
  var nString = n + '';
  var end = nString.length - 1;
  for (var i = 0; i < nString.length / 2; i ++) {
    if (nString[i] !== nString[end])
      return false;
    end--;
  }

  return true;
}


function find() {
  var max = 0;
  for(var i = 100;i <= 999 ; i++) {
    for(var a = 100; a <=999; a++) {
      var f = a*i;
      if (isPalindrome(f) && f > max) {
        max = f;
      }
    }
  }
  return max;
}

console.log(find(99));
