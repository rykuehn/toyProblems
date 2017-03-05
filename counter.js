function Timer(value) {
  this.value = value;
}

Timer.prototype.count = function() {
  console.log(this.value)
  this.value--

  if(this.value <= 0 ){
    clearInterval(add);
    return;
  }
  
}

var mine = new Timer(5);
var add = setInterval(() => mine.count(), 1000);