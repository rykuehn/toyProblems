var startTimer = function(duration) {
  duration = Number(duration);
  
  var display = document.querySelector('#time');

  var minutes = parseInt(duration / 60, 10);
  var seconds = parseInt(duration % 60, 10);

  minutes = minutes < 60 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  display.textContent = `${minutes}: ${seconds} left`;

  duration--

  var add = setInterval(function() {
    var minutes = parseInt(duration / 60, 10);
    var seconds = parseInt(duration % 60, 10);

    minutes = minutes < 60 ? `0${minutes}` : minutes;
    seconds = seconds < 60 ? `0${seconds}` : seconds;

    duration--
    display.textContent = `${minutes}: ${seconds} left`;

    if(duration < 0) {
      display.textContent = "Food Is ready!"
      clearInterval(add);
    }
  }, 1000);

}



