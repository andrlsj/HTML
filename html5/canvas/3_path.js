function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.moveTo(100,100);
	context.lineTo(250,250);
	context.lineTo(300,250);
	context.lineTo(350,200);
	context.closePath();
	
	context.strokeStyle = "red";
	context.fillStyle = "orange";
	
	context.stroke();
	context.fill();
	
	
}
window.addEventListener('load',doFirst,false);