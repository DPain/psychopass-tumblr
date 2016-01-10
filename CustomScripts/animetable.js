// Created by D_Pain
// Inorder to use this javascript, add the below at the very end of the your body.

/*
// Creating element animeTableCloseButton
var animeTableCloseButton = document.createElement('div');
animeTableCloseButton.id = 'animeTableClose';
animeTableCloseButton.style.position = 'absolute'
animeTableCloseButton.style.zIndex = '1';
animeTableCloseButton.style.backgroundImage = 'url(http://static.tumblr.com/cnaahls/Aa0nz2bd7/bottomrightdockimage_xbutton.png)';
animeTableCloseButton.style.height = '25px';
animeTableCloseButton.style.width = '25px';
animeTableCloseButton.style.top = '1px';
animeTableCloseButton.style.right = '1px';
animeTableCloseButton.style.cursor = 'pointer';
*/

// Creating element iframe
var animeTableIframe = document.createElement('iframe');
animeTableIframe.id = 'animeTable';
animeTableIframe.style.zIndex = '1';
animeTableIframe.src = 'http://www.anissia.net/anitime/#cl=fafafa%20fafafa%20da1f1f%202e2e2e%20dbdbdb%203b3b3b%203b3b3b%20ffffff%20bdbdbd%20000000';
animeTableIframe.frameBorder = '0';
animeTableIframe.style.width = '250px';
animeTableIframe.style.height = '400px';
animeTableIframe.style.top = '0px';
animeTableIframe.style.right = '150px';

// Creating element animeTable
var animeTableContainer = document.createElement('div');
animeTableContainer.id = 'animeTableContainer';
animeTableContainer.style.position = 'absolute'
animeTableContainer.style.display = 'inline-block';
animeTableContainer.style.top = '0px';
animeTableContainer.style.right = '150px';
animeTableContainer.style.height = 'auto';
animeTableContainer.style.width = 'auto';
//animeTableContainer.appendChild(animeTableCloseButton);
animeTableContainer.appendChild(animeTableIframe);

// Adding elements into body
document.getElementById('animeTableSlot').appendChild(animeTableContainer);

// Function to close the animeTable
function closeAnimeTable() {
  document.getElementById('animeTableSlot').removeChild(animeTableContainer);
  //Will remove the script tag if it is named animeTable.
  document.getElementsByTagName('body')[0].removeChild(document.getElementById('animeTable'));
}

/*
// Adding event listeners
animeTableCloseButton.addEventListener("click", function(){closeAnimeTable()}, false);
*/