// Created by D_Pain
// Ver: 1.2

// Instantiates required arrays
var trackNameList = new Array('SONG_NAME','SONG_NAME','SONG_NAME','SONG_NAME','SONG_NAME');
var trackUrlList = new Array('YOUR_LINK','YOUR_LINK','YOUR_LINK','YOUR_LINK','YOUR_LINK');

// Used to keep track what song is currently loaded
var currentSongId = 0;

// Create the audio tag
var soundFile = document.createElement("audio");
soundFile.preload = "auto";
// Creates the sound sources and adds them to the audio tag
var src = document.createElement("source");
src.src = trackUrlList[0];
soundFile.appendChild(src);
// Load the audio tag
soundFile.load();
soundFile.volume = 0.800000;

// Used to toggle playlistDiv
var isVisible = false;

// Create playlistDiv div tag
var playlistDiv = document.createElement("div");
playlistDiv.id = 'playlistDiv';
playlistDiv.style.position = 'fixed';
playlistDiv.style.backgroundColor = 'rgba(80, 80, 80, 0.5)';
playlistDiv.style.padding = '4px';
playlistDiv.style.zIndex = '1';
playlistDiv.style.height = 'auto';
playlistDiv.style.width = '350px';
playlistDiv.style.top = '44px';
playlistDiv.style.left = '10px';

// Adding all the available songs in the playlist
for (i = 0; i < trackNameList.length; i++) {
	var songName = document.createElement('p');
	songName.style.margin = '0px';
	songName.style.padding = '4px';
	songName.style.color = '#ffffff';
	songName.style.fontSize = '13px';
	songName.style.fontFamily = 'NanumGothic';
	songName.id = 'song_' + i;
	songName.style.margin = '5px';
	songName.style.padding = '0px';
	songName.innerHTML = (i + 1) + '. ' + trackNameList[i];
	songName.style.cursor = 'pointer';
	songName.addEventListener("click", function () {changeMusic(this)}, false);
	playlistDiv.appendChild(songName);
}

// Plays the sound
function play() {
	// Set the current time for the audio file to the beginning
	soundFile.volume = volume;
	// Due to a bug in Firefox, the audio needs to be played after a delay
	setTimeout(function () {soundFile.play();}, 1);
}

// Creating element buttonPlay
var e1 = document.createElement('div');
e1.id = 'buttonPlay';
e1.style.display = 'inline-block';
e1.style.position = 'relative';
e1.style.zIndex = '1';
e1.style.backgroundImage = 'url(//playshape.png)';
e1.style.height = '25px';
e1.style.width = '25px';
e1.style.top = '0px';
e1.style.left = '0px';
e1.style.cursor = 'pointer';

// Creating element buttonStop
var e2 = document.createElement('div');
e2.id = 'buttonStop';
e2.style.display = 'inline-block';
e2.style.position = 'relative';
e2.style.zIndex = '1';
e2.style.backgroundImage = 'url(//stopshape.png)';
e2.style.height = '25px';
e2.style.width = '25px';
e2.style.top = '0px';
e2.style.left = '5px';
e2.style.cursor = 'pointer';

// Creating element buttonVolUp
var e3 = document.createElement('div');
e3.id = 'buttonVolUp';
e3.style.display = 'inline-block';
e3.style.position = 'relative';
e3.style.zIndex = '1';
e3.style.backgroundImage = 'url(//vol_.png)';
e3.style.height = '25px';
e3.style.width = '25px';
e3.style.top = '0px';
e3.style.left = '15px';
e3.style.cursor = 'pointer';

// Creating element buttonVolDown
var e4 = document.createElement('div');
e4.id = 'buttonVolDown';
e4.style.display = 'inline-block';
e4.style.position = 'relative';
e4.style.zIndex = '1';
e4.style.backgroundImage = 'url(//vol-.png)';
e4.style.height = '25px';
e4.style.width = '25px';
e4.style.top = '0px';
e4.style.left = '20px';
e4.style.cursor = 'pointer';

// Creating element buttonList
var e5 = document.createElement('div');
e5.id = 'buttonList';
e5.style.display = 'inline-block';
e5.style.position = 'relative';
e5.style.zIndex = '1';
e5.style.backgroundImage = 'url(//listshape.png)';
e5.style.height = '25px';
e5.style.width = '25px';
e5.style.top = '0px';
e5.style.left = '25px';
e5.style.cursor = 'pointer';

// Creating element songName
var e6 = document.createElement('p');
e6.id = 'songName';
e6.className = 'marquee';
e6.style.display = 'inline-block';
e6.style.position = 'relative';
e6.style.zIndex = '1';
e6.style.width = '200px';
e6.style.height = '17px';
e6.style.top = '-4px';
e6.style.left = '10px';
e6.style.color = '#ffffff';
e6.style.fontSize = '13px';
e6.style.fontFamily = 'NanumGothic';
e6.style.margin = '0px';
e6.innerHTML = trackNameList[0];

// Creating element mp3Player
var container = document.createElement('div');
container.id = 'mp3Player';
container.style.position = 'fixed';
container.style.top = '10px';
container.style.left = '10px';
container.style.height = '25px';
container.style.width = '350px';
container.style.backgroundColor = 'rgba(138, 138, 138, 0.3)';
container.style.padding = '4px';
container.appendChild(e1);
container.appendChild(e2);
container.appendChild(e6);
container.appendChild(e3);
container.appendChild(e4);
container.appendChild(e5);

// Adding elements into body
document.getElementsByTagName('body')[0].appendChild(container);

// Function to play sound
function soundPlay() {
	soundFile.play();
	e6.style.animationPlayState = 'running';
}

// Function to stop sound
function soundStop() {
	soundFile.pause();
	e6.style.animationPlayState = 'paused';
}

// Function to increase volume
function soundVolUp() {
	if (soundFile.volume <= 1.000000) {
		soundFile.volume += 0.100000
	} else {
		soundFile.volume = 1.000000
	}
}

// Function to decrease volume
function soundVolDown() {
	if (soundFile.volume >= 0.000000) {
		soundFile.volume -= 0.100000;
	} else {
		soundFile.volume = 0.000000;
	}
}

// Function to toggle playlist div
function playlistToggle() {
	if (isVisible) {
		document.getElementsByTagName('body')[0].removeChild(playlistDiv);
		isVisible = false;
	} else {
		document.getElementsByTagName('body')[0].appendChild(playlistDiv);
		isVisible = true;
	}
}

// Function to change song
function changeMusic(elem) {
	src.src = trackUrlList[elem.id.substring(5, 6)];
	currentSongId = elem.id.substring(5, 6);
	soundFile.load();
	e6.innerHTML = trackNameList[elem.id.substring(5, 6)];
	soundFile.play();
	e6.style.animationPlayState = 'running';
}

// Function to play next song
function playNext() {
	if (currentSongId < (trackUrlList.length - 1)) {
		currentSongId++;
		src.src = trackUrlList[(currentSongId)];
		soundFile.load();
		e6.innerHTML = trackNameList[(currentSongId)];
		soundFile.play();
		e6.style.animationPlayState = 'running';
	} else {
		e6.style.animationPlayState = 'paused';
	}
}

// Adding event listeners
e1.addEventListener("click", function () {soundPlay()}, false);
e2.addEventListener("click", function () {soundStop()}, false);
e3.addEventListener("click", function () {soundVolUp()}, false);
e4.addEventListener("click", function () {soundVolDown()}, false);
e5.addEventListener("click", function () {playlistToggle()}, false);
soundFile.addEventListener("ended", function () {playNext()}, false);