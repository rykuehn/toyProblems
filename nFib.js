function fib(n) {
  if(n === 1 || n === 2) {
    return 1;
  }

  return fib(n-1) + fib(n - 2);
}

// function fib(n) {

//   if(n === 0 || n === 1){
//     return 1;
//   }

//   let current = 0;
//   let prev = 1;
//   let prevPrev = 0;

//   for(var i = 1; i < n; i++) {
//     current = prevPrev + prev;
//     prevPrev = prev;
//     prev = current;
    
//   }

//   return current;
// }

console.log(fib(7))