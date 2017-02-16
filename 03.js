//Given an arrayOfInts, find the highestProduct you can get from three of the integers.

function highestProduct(array) {
  let maxOfThree = array[0] * array[1] * array[2];

  let maxofTwo = array[0] * array[1];
  let minofTwo = array[0] * array[1];
  
  let min = Math.min(array[0], array[1]);
  let max = Math.max(array[0], array[1]);

  if(array.length < 3) {
    return 'You need at least three elements'
  }

  for(var i = 2; i < array.length; i++) {
    var num = array[i];

    maxofTwo = Math.max(maxofTwo, max * num, min * num);
    minofTwo = Math.min(minofTwo, min * num, max * num);

    maxOfThree = Math.max(maxOfThree, maxofTwo * num, minofTwo * num);

    max = Math.max(num, max);
    min = Math.min(num, min);

    console.log({max, min, maxOfThree, minofTwo, maxofTwo});lkj
  }
  return maxOfThree;
}

console.log(highestProduct( [-10, -10, 1, 3, 2] ))