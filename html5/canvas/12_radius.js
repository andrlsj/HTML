function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var gradient = context.createRadialGradient(350,250,50,350,250,250);
	gradient.addColorStop(0,'red');
	gradient.addColorStop(1,'yellow');
//	gradient.addColorStop(0.5,'red');
	
	context.fillStyle = gradient;
	content.globalAlpha=0.5;
	context.fillRect(100,100,500,300);
	
}
window.addEventListener('load',doFirst,false);