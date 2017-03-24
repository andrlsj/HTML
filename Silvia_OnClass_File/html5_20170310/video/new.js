function doFirst(){
	barsize = 560;
	
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	fullButton = document.getElementById('fullButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	
	playButton.addEventListener('click',playOrPause,false);
	myMovie.addEventListener('click',playOrPause,false);
	fullButton.addEventListener('click',fullScreen,false);
	defaultBar.addEventListener('click',clickedBar,false);
}
function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){	//如果影片正在跑(play)，按按鈕會暫停
		myMovie.pause();
		playButton.innerHTML = 'Play';
	}else{
		myMovie.play();
		playButton.innerHTML = 'Pause';
		setInterval(update,400);
	}
}
function update(){
	if(!myMovie.ended){
		var size = barsize / myMovie.duration * myMovie.currentTime;
		progressBar.style.width = size + 'px';
	}else{
		playButton.innerHTML = 'Play';
		progressBar.style.width = '0px';
	}
}
function fullScreen(){
	myMovie.webkitEnterFullScreen();
}
function clickedBar(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	var newTime = mouseX / (barsize / myMovie.duration);
	
	myMovie.currentTime = newTime;	
	progressBar.style.width = mouseX + 'px';
}
window.addEventListener('load',doFirst,false);















