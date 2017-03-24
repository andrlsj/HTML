function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.rect(100,100,200,250);
	context.stroke();
	
}
window.addEventListener('load',doFirst,false);