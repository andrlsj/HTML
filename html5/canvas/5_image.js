function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var img =  new Image();
	
	img.src="../../images/limes.jpg";
	img.addEventListener('load',function(){
	
		context.drawImage(img,100,100)
	},false)
	
	
	
	
	
	

	
	
}
window.addEventListener('load',doFirst,false);