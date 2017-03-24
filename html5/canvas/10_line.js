function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'red';
	context.lineWidth = 15;
	/* lineCap */
	context.moveTo(100,100);
	context.lineTo(250,100);
	context.stroke();
	
	context.lineCap = 'round';
	context.beginPath();
	context.moveTo(100,130);
	context.lineTo(250,130);
	context.stroke();
		
	context.lineCap = 'square';
	context.beginPath();
	context.moveTo(100,160);
	context.lineTo(250,160);
	context.stroke();
	
	/* lineJoin */
	context.lineWidth = 25;
	
	context.strokeRect(100,220,100,250);
	
	context.lineJoin = 'round';
	context.strokeRect(250,220,100,250);
	
	context.lineJoin = 'bevel';
	context.strokeRect(400,220,100,250);
}
window.addEventListener('load',doFirst,false);