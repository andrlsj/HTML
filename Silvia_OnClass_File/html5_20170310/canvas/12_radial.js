function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var gradient = context.createRadialGradient(350,250,50,250,250,200);
	gradient.addColorStop(0,'red');
	gradient.addColorStop(1,'blue');
//	gradient.addColorStop(0.5,'red');
	
	context.fillStyle = gradient;
	context.globalAlpha = 0.7;
	context.fillRect(100,100,500,300);
}
window.addEventListener('load',doFirst,false);