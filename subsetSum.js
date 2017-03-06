function subSet(array, target){
  var results = [];
  var maxSum = array.reduce((a, b) => a + b, 0);

//initalize the results table
//rows represent each available number in array
//colums represent every possible sum

  for(var i = 0; i <= array.length -1 ; i++) {
    var row = [];
    for(var j = 0; j<= maxSum; j++) {
      if(i === 0 && array[i] === j) {
        row.push(1)
      } else if(j === 0) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    results.push(row)
  }

  for(var row = 1; row <= array.length -1; row++) {
    for(var column = 1; column <= maxSum; column++) {
      if(results[row - 1][column] === 1) {
        results[row][column] = 1;
      } else if (results[row - 1] [column - array[row]] === 1) {
        results[row][column] = 1;
      }
    }
  }

  if(results[array.length -1][target] === 1) {
    console.log('yes')
  } else {
    console.log([])
  }
}

subSet([1, 2, 3], 9)