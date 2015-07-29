// Created by D_Pain
// Inorder to use this javascript, add the below at the very end of the your body.
// <script id="mp3PlayerScript" src="url"></script>

//Create the audio tag
var soundFile = document.createElement("audio");
soundFile.preload = "auto";

//Load the sound file (using a source element for expandability)
var src = document.createElement("source");
src.src = "YOUR_URL";
soundFile.appendChild(src);

//Load the audio tag
//It auto plays as a fallback
soundFile.load();
soundFile.volume = 1.000000;

//Plays the sound
function play() {
   //Set the current time for the audio file to the beginning
   soundFile.currentTime = 0.01;
   soundFile.volume = volume;

   //Due to a bug in Firefox, the audio needs to be played after a delay
   setTimeout(function(){soundFile.play();},1);
}

// Created by D_Pain
// Creating element buttonPlay
var e1 = document.createElement('div');
e1.id = 'buttonPlay';
e1.style.display = 'inline-block';
e1.style.position = 'relative';
e1.style.zIndex = '1';
e1.style.backgroundImage = 'url(/Images/Play.PNG)';
e1.style.height = '25px';
e1.style.width = '55px';
e1.style.bottom = '0px';
e1.style.left = '0px';
e1.style.cursor = 'pointer';

// Creating element buttonStop
var e2 = document.createElement('div');
e2.id = 'buttonStop';
e2.style.display = 'inline-block';
e2.style.position = 'relative';
e2.style.zIndex = '1';
e2.style.backgroundImage = 'url(/Images/Stop.PNG)';
e2.style.height = '25px';
e2.style.width = '55px';
e2.style.bottom = '0px';
e2.style.left = '10px';
e2.style.cursor = 'pointer';

// Creating element buttonStop
var e3 = document.createElement('div');
e3.id = 'buttonVolUp';
e3.style.display = 'inline-block';
e3.style.position = 'relative';
e3.style.zIndex = '1';
e3.style.backgroundImage = 'url(/Images/Vol+.png)';
e3.style.height = '25px';
e3.style.width = '55px';
e3.style.bottom = '0px';
e3.style.left = '20px';
e3.style.cursor = 'pointer';

// Creating element buttonStop
var e4 = document.createElement('div');
e4.id = 'buttonVolDown';
e4.style.display = 'inline-block';
e4.style.position = 'relative';
e4.style.zIndex = '1';
e4.style.backgroundImage = 'url(/Images/Vol-.png)';
e4.style.height = '25px';
e4.style.width = '55px';
e4.style.bottom = '0px';
e4.style.left = '30px';
e4.style.cursor = 'pointer';

// Creating element mp3Player
var container = document.createElement('div');
container.id = 'mp3Player';
container.style.position = 'fixed';
container.style.top = '15px';
container.style.left = '10px';
container.style.height = 'auto';
container.style.width = 'auto';
container.appendChild(e1);
container.appendChild(e2);
container.appendChild(e3);
container.appendChild(e4);

// Adding elements into body
document.getElementsByTagName('body')[0].appendChild(container);

// Function to play sound
function soundPlay() {
  soundFile.play();
}

// Function to stop sound
function soundStop() {
  soundFile.pause();
}

// Function to stop sound
function soundVolUp() {
  if(soundFile.volume<=1.000000){
	  soundFile.volume += 0.100000
  }else{
	  soundFile.volume = 1.000000
  }
}

// Function to stop sound
function soundVolDown() {
  if(soundFile.volume>=0.000000){
	  soundFile.volume -= 0.100000
  }else{
	  soundFile.volume = 0.000000
  }
}

// Adding event listeners
e1.addEventListener("click", function(){soundPlay()}, false);
e2.addEventListener("click", function(){soundStop()}, false);
e3.addEventListener("click", function(){soundVolUp()}, false);
e4.addEventListener("click", function(){soundVolDown()}, false);
