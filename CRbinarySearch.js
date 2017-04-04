const BinarySearchRec = function(value, array, high, low) {
  let max = high === undefined ? array.length - 1 : high;
  let min = low === undefined ? 0 : low;
  let mid = min + Math.floor((max - min) / 2);

   if(value === array[mid]) {
     return mid;
   }

   if(value > array[mid]) {
    return BinarySearchRec(value, array, max, mid + 1);
   }

   if(value < array[mid]) {
    return BinarySearchRec(value, array, mid - 1, min);
   }

   if(min > max){
    return -1;
   }
}

//Space Complexity
//O(logN)

//Time Complexity
//O(logN)

const BinarySearchIterative = function(value, array, high, low) {
 
  while(low <= high) {
    var mid = low + Math.floor((high - low) / 2);

    if(value === array[mid]){
      return mid;
    }

    if(value > array[mid]){
      low = low + 1;
    }

    if(value < array[mid]){
      high = high - 1;
    }
  }

  return -1;
}

//Space Complexity
//O(1)

//Time Complexity
//O(logN)


//console.log(BinarySearchIterative(9, [ 1, 2, 4, 5, 7, 6, 9], 6, 0));
