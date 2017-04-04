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

console.log(BinarySearchRec(9, [ 1, 2, 4, 5, 7, 6, 9]));
