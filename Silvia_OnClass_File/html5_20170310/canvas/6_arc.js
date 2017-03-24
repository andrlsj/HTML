function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'red';
	context.lineWidth = 5;
	
	context.arc(200,200,100,0,Math.PI,false);	
	context.stroke();
	
	context.beginPath();
	context.arc(450,200,100,0,Math.PI,true);	
	context.stroke();
	
	context.beginPath();
	context.arc(200,450,100,0,2*Math.PI,true);	
	context.stroke();
	
	context.beginPath();
	context.arc(450,450,100,0.3*Math.PI,1.7*Math.PI,false);	
	context.stroke();
}
window.addEventListener('load',doFirst,false);