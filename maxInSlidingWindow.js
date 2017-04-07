const slidingWindow = function(arr, w) {
  var result = [];

  if(w > arr.length || w === 0) {
    return result;
  }

  var queue = [];

  for(var j = 0; j < arr.length; j++) {
    while(queue.length > 0 && arr[j] > arr[queue[queue.length - 1]]) {
      queue.pop();
    }

    if(queue.length > 0 && queue[0] <= j - w) {
      queue.shift();
    }

    queue.push(j)

    if (j >= w - 1) {
      result.push(arr[queue[0]])
    }
    
  }

  return result;
}


console.log(slidingWindow([4, 100, 5, 1, 0, 0 , 0], 3));