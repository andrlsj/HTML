function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle ='red';
	context.lineWidth =5;
	
	context.moveTo(200,400);
	context.bezierCurveTo(250,250,400,500,500,450);
	context.stroke();
	
	context.strokeStyle ='blue';
	context.lineWidth =1;
	
	context.beginPath();
	context.moveTo(200,400);
	context.lineTo(250,250);
	context.lineTo(400,500);
	context.lineTo(500,450);
	

	context.stroke();
	
	
	

	
	
}
window.addEventListener('load',doFirst,false);