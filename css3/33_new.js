function doFirst()
{
	//先跟HTML畫面產生關聯(尋找物件)
	image = document.getElementById('image');
	playButton = document.getElementById('playButton');
	pauseButton = document.getElementById('pauseButton');
	
	//再建事件聆聽的功能
	playButton.addEventListener('click',playImage,false);
	pauseButton.addEventListener('click',pauseImage,false);
}

function talk()
{
	alert('hi');
}
function playImage(){
	image.style.animationPlayState="running";
}
function pauseImage(){
	image.style.animationPlayState="paused";
}



window.addEventListener('load',doFirst,false);
