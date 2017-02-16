var example =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

var example2 = [
  {startTime: 1, endTime: 3},
  {startTime: 2, endTime: 5}
];

function mergeTimes(input) {
  input.sort((a, b) => {
    return a.startTime - b.startTime;
  })

  var result = [input[0]];
  var currentIndex = 0;

  for(var i = 1; i<input.length; i++) {
    let next = input[i];

    if(next.startTime <= result[currentIndex].endTime) {
      result[currentIndex].endTime = Math.max(result[currentIndex].endTime, next.endTime);
    }

    if(next.startTime > result[currentIndex].endTime) {
      result.push(next)
      currentIndex++
    }

  }

  return result;
};

console.log(mergeTimes(example))