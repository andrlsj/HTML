function doFirst(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	
	canvas.addEventListener('mousemove',usePen,false);
	
	
}
function usePen(e){
	context.fillStyle = 'red';
	context.globalAlpha = 0.5;
	context.fillRect(e.pageX,e.pageY,10,10);
}
window.addEventListener('load',doFirst,false);