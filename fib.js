const fibRecursive = function(n) {
  if(n === 0 || n === 1) {
    return 1;
  }

  return fibRecursive(n-1) + fibRecursive(n-2);
}

//time complexity O(2^n)
//memory complexity O(n)

const fibIterative = function(n){
  let current;
  let prev = 1;
  let prevPrev = 0;

  while(n > 0) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;

    n -= 1;
  }

  return current;
}

//time complexity O(n)
//memory complexity O(1)

console.log(fibRecursive(1))
console.log(fibIterative(1))