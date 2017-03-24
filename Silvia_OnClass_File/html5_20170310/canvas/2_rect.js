function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.rect(100,100,200,250);
	context.stroke();
	
	/* context.fillRect(100,100,200,250);
	context.clearRect(150,150,100,100); */
	
	/* context.strokeRect(100,100,200,250); */
	
	/* 橡皮擦 */
	/* context.clearRect(0,0,canvas.width,canvas.height); */
}
window.addEventListener('load',doFirst,false);