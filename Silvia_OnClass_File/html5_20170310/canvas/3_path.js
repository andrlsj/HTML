function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.moveTo(100,100);
	context.lineTo(250,250);
	context.lineTo(350,150);
	context.lineTo(420,230);
	context.closePath();
	
	context.strokeStyle = 'red';
	context.fillStyle = 'blue';
	
	context.lineWidth = 5;
	
	context.stroke();
	context.fill();
}
window.addEventListener('load',doFirst,false);