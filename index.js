(function() {
  'use strict';
  // stopButton.addEventListener('click', function(event) {
  //   stopButton.Attributes += "stop";
  // })
  // YOUR CODE HERE
})();


//Part 1: Toggling The Trafic Lights
let stopLightStatus = false;
let slowLightStatus = false;
let goLightStatus = false;

stopButton.addEventListener('click', function(event) {
  let stopBulb = document.getElementById("stopLight"); 
  if (stopLightStatus === false) {
    stopBulb.classList.add('stop');
    stopLightStatus = true; 
  }
    else {
      stopBulb.classList.remove('stop');
      stopLightStatus = false;
    }
});

slowButton.addEventListener('click', function(event) {
  let slowBulb = document.getElementById("slowLight"); 
  if (slowLightStatus === false) {
    slowBulb.classList.add('slow');
    slowLightStatus = true;
  }
    else {
      slowBulb.classList.remove('slow');
      slowLightStatus = false;
    }
});

goButton.addEventListener('click', function(event) {
  let goBulb = document.getElementById("goLight");
  if (goLightStatus === false) { 
    goBulb.classList.add('go');
    goLightStatus = true;
  }
    else {
      goBulb.classList.remove('go');
      goLightStatus = false;
    }
  
});


//Part 2: Tracking Mouseover and Mouseleave

//go light on
goButton.addEventListener("mouseover", function( event ) {
  let buttonTarget = event.target;
      console.log("Entered Go Button");
});
//go light off
goButton.addEventListener("mouseleave", function( event ) {
  let buttonTarget = event.target;
      console.log("Left Go Button");
});

//slow light on
slowButton.addEventListener("mouseover", function( event ) {
  let buttonTarget = event.target;
      console.log("Entered Slow Button");
});
//slow light off
slowButton.addEventListener("mouseleave", function( event ) {
  let buttonTarget = event.target;
      console.log("Left Stop Button");
});

//stop light on
stopButton.addEventListener("mouseover", function( event ) {
  let buttonTarget = event.target;
      console.log("Entered Stop Button");
});
//stop light off
stopButton.addEventListener("mouseleave", function( event ) {
  let buttonTarget = event.target;
      console.log("Left Stop Button");
});


//Bonus: What is the state of each bulb?
controls.addEventListener("click", function(event) {
  let buttonTarget = event.target;
  if (event.target.id === stopLight) {
    if (stopLightStatus === false) {
      console.log('Stop Bulb On')
    }
    else {
      console.log("Stop Bulb Off")
    }
  };
  if (event.target.id === slowLight) {
    if (slowLightStatus === false) {
      console.log('Slow Bulb On')
    }
    else {
      console.log("Slow Bulb Off")
    }
  };
  if (event.target.id === goLight) {
    if (goLightStatus === false) {
      console.log('Go Bulb On')
    }
    else {
      console.log("Go Bulb Off")
    }
  }
});


