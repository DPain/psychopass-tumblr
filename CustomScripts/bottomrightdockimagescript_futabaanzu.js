// Created by D_Pain
// Inorder to use this javascript, add the below at the very end of the your body.

// Creating element bottomRightDockImageClose
var e1 = document.createElement('div');
e1.id = 'bottomRightDockImageClose';
e1.style.position = 'absolute'
e1.style.zIndex = '1';
e1.style.backgroundImage = 'url(http://static.tumblr.com/cnaahls/Aa0nz2bd7/bottomrightdockimage_xbutton.png)';
e1.style.height = '25px';
e1.style.width = '25px';
e1.style.top = '0px';
e1.style.right = '10px';
e1.style.cursor = 'pointer';

// Creating element bottomRightDockImage
var e2 = document.createElement('div');
var imageUrl = 'url(http://static.tumblr.com/cnaahls/ZyCnz2bdd/bottomrightdockimage_futabaanzu.png)';
e2.id = 'bottomRightDockImage'
e2.style.backgroundImage = imageUrl;
e2.style.width = "300px";
e2.style.height = "411px";
e2.style.zIndex = '0';

// Creating element bottomRightDock
var container = document.createElement('div');
container.id = 'bottomRightDock';
container.style.position = 'fixed';
container.style.bottom = '0px';
container.style.right = '0px';
container.style.height = 'auto';
container.style.width = 'auto';
container.appendChild(e1);
container.appendChild(e2);

// Adding elements into body
document.getElementsByTagName('body')[0].appendChild(container);

// Function to close the bottomRightDock
function closeDock() {
  document.getElementsByTagName('body')[0].removeChild(container);
  document.getElementsByTagName('body')[0].removeChild(document.getElementById('bottomRightDockScript'));
}

// Adding event listeners
e1.addEventListener("click", function(){closeDock()}, false);