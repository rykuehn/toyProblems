const searchRotatedArray = function(value, array, max, min) {
  let low = min === undefined ? 0 : min;
  let high = max === undefined ? array.length - 1 : max;
  let mid = low + Math.floor((high - low) / 2);

  if(array[mid] === value) {
    return mid;
  }

  if(array[low] < array[mid] && value < array[mid] && value >= array[low]) {
    return searchRotatedArray(value, array, mid - 1, min);
  } else if (array[mid] < array[max] && value > array[mid] && value <= array[max]) {
    return searchRotatedArray(value, array, max, mid + 1);
  } else if (array[low] > array[mid]) {
    return searchRotatedArray(value, array, max, mid + 1 );
  } else {
    return searchRotatedArray(value, array, mid - 1, max)
  }

  return -1;
}

console.log(searchRotatedArray(4, [100, 200, 300, 1, 2, 4, 9]));