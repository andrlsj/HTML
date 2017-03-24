function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.shadowOffsetX =5;
	context.shadowOffsetY =5;
	/* context.shadowColor ='yellow'; */
	context.shadowColor ='rgb(120,120,120)';
	context.shadowBlur =10;
	context.font = 'bold 50px Tahoma';
	context.fillText("MICKY MOUSE",100,100);
	
	context.shadowOffsetX =0;
	context.shadowOffsetY =0;
	context.shadowColor ='black';
	context.shadowBlur =25;
	context.fillStyle='#fff';
	context.fillText("MICKY MOUSE",100,180);
	
	context.shadowOffsetX =0;
	context.shadowOffsetY =0;
	context.shadowColor ='black';
	context.shadowBlur =8;
	context.fillStyle='#fff';
	
	context.fillText("MICKY MOUSE",100,260);
	
	
	context.shadowOffsetX =0;
	context.shadowOffsetY =0;
	context.shadowColor ='rgb(255,0,0)';
	context.shadowBlur =8;
	context.fillStyle='#fff';
	context.fillText("MICKY MOUSE",100,340);
	
	context.shadowOffsetX =0;
	context.shadowOffsetY =0;
	context.shadowColor ='rgb(0,0,255)';
	context.shadowBlur =8;
	context.fillStyle='#fff';
	context.fillText("MICKY MOUSE",100,340);

	
	
}
window.addEventListener('load',doFirst,false);