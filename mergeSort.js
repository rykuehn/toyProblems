function mergeSort(array){
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  if(array.length <= 1) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(array1, array2) {
  var result = [];
  
  while(array1.length && array2.length) {
    if(array1[0] < array2[0]){
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }

  while(array1.length) {
    result.push(array1.shift());
  }

  while(array2.length) {
    result.push(array2.shift());
  }

  return result;
}

//console.log(mergeSort([4, 6, 81, 1, 0, 33, 11, 2, 22, 1]));


console.log(mergeSort([3, 1, 100, 300, 5000, -4, -5]))