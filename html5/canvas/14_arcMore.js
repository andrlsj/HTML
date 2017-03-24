
function doFirst(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	
	context.strokeStyle = 'red';
	context.lineWidth = 5;
	
	context.arc(200,200,150,0,2*Math.PI,true);	
	context.stroke();
	
	
	context.beginPath();
	
	context.translate(200,200);
	
	context.moveTo(0,0);
	context.lineTo(0,-130);
	context.stroke();
	context.beginPath();
	context.moveTo(200,200);
	context.lineTo(200,70);
	context.stroke();
	
	
	
}
window.addEventListener('load',doFirst,false);