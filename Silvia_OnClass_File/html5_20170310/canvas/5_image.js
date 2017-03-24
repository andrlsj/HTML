function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var image = new Image();
	image.src = '../../images/limes.jpg';
	image.addEventListener('load',function(){
		context.drawImage(image,0,0,canvas.width,canvas.height);
	},false);
	
}
window.addEventListener('load',doFirst,false);