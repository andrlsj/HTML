function doFirst(){
	barsize=560;
	myMovie.volume=0.2;
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	fullButton = document.getElementById('fullButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	
	//new object
	stopMovieBtn = document.getElementById('stopMovie');
	upVolumeBtn = document.getElementById('upVolume');
	downVolumeBtn = document.getElementById('downVolume');
	muteVolumeBtn = document.getElementById('muteVolume');
	
	myMovie.addEventListener('click',playOrPause,false);
	playButton.addEventListener('click',playOrPause,false);
	fullButton.addEventListener('click',fullScreen,false);
	defaultBar.addEventListener('click',clickedBar,false);	
	
	//new call
	stopMovieBtn.addEventListener('click',stopMovie,false);
	upVolumeBtn.addEventListener('click',upVolume,false);
	downVolumeBtn.addEventListener('click',downVolume,false);
	muteVolumeBtn.addEventListener('click',muteVolume,false);	
}
window.addEventListener('load',doFirst,false);

function stopMovie(){
	//按下後 直接影片進度歸零
	
	myMovie.currentTime= 0;
	progressBar.style.width='0px'
	myMovie.pause();
	playButton.innerHTML = 'Play';
} 

function upVolume(){
	
	if(myMovie.volume<0.99){
		myMovie.volume +=0.1;
	}else if(myMovie.volume>=0.99){
		myMovie.volume =0.99;
	}
	
}

function downVolume(){
	if(myMovie.volume>0){
		myMovie.volume -=0.1;
	}else if(myMovie.volume=0){
		myMovie.volume =0;
	}
	
}

function muteVolume(){
	myMovie.volume=0;
	
}



function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){	
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
		var size = barsize/myMovie.duration*myMovie.currentTime;
		progressBar.style.width=size+'px';
	
	}else{
		playButton.innerHTML='Play';
		progressBar.style.width='0px'	
	}		
	
}




function fullScreen(){
	myMovie.webkitEnterFullScreen();
}

function clickedBar(e){
	
	var mouseX = e.clientX-defaultBar.offsetLeft;
	var newTime = mouseX/(barsize/myMovie.duration);
	
	progressBar.style.width=mouseX+'px';
	myMovie.currentTime= newTime;
	
	
	
	
}
