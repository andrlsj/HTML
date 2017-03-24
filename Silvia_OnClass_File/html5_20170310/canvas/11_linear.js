function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var gradient = context.createLinearGradient(100,300,600,300);
	gradient.addColorStop(0,'green');
	gradient.addColorStop(1,'blue');
	gradient.addColorStop(0.5,'red');
	
	context.fillStyle = gradient;
	context.fillRect(100,100,500,300);
}
window.addEventListener('load',doFirst,false);