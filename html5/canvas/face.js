function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'black';
	context.lineWidth = 5;
	/* face1 */
	context.arc(200,200,100,0,2*Math.PI,true);	
	context.stroke();
	/* left eye */
	context.beginPath();
	context.arc(170,170,20,0,2*Math.PI,true);
	context.stroke();
	/* right eye */
	context.beginPath();
	context.arc(230,170,20,0,2*Math.PI,true);
	context.stroke();
	/* mouth */
	context.beginPath();
	context.arc(200,200,50,0,Math.PI,false);	
	context.stroke();
	
	
	/* face2 */
	context.beginPath();
	context.arc(450,200,100,0,2*Math.PI,true);	
	context.stroke();
	/* left eye */
	context.beginPath();
	context.arc(420,170,20,0,2*Math.PI,true);
	context.stroke();
	/* right eye */
	context.beginPath();
	context.arc(480,170,20,0,2*Math.PI,true);
	context.stroke();
	/* mouth */
	context.beginPath();
	context.arc(450,250,30,0,Math.PI,true);	
	context.stroke();
	
	
	/* face3 */
	context.beginPath();
	context.arc(200,450,100,0,2*Math.PI,true);	
	context.stroke();
	/* left eye */
	context.beginPath();
	context.arc(170,420,20,0,2*Math.PI,true);
	context.stroke();
	/* right eye */
	context.beginPath();
	context.arc(230,420,20,0,2*Math.PI,true);
	context.stroke();
	/* mouth */
	context.beginPath();
	context.arc(200,500,10,0,2*Math.PI,true);	
	context.stroke();

	
	
	
	
	/* face4 */
	context.beginPath();
	context.arc(450,450,100,0,2*Math.PI,true);	
	context.stroke();
	/* left eye */
	context.beginPath();
	context.arc(420,420,20,0,2*Math.PI,true);
	context.stroke();
	/* right eye */
	context.beginPath();
	context.arc(480,420,20,0,2*Math.PI,true);
	context.stroke();
	/* mouth */
	context.beginPath();
	context.arc(450,490,40,0,2*Math.PI,true);	
	context.stroke();
	/* tongue */
	context.beginPath();
	context.arc(450,500,37,0,Math.PI,true);	
	context.stroke();
	
	
	
	
	
	
/* 	context.beginPath();
	context.arc(200,450,100,0,2*Math.PI,true);	
	context.stroke(); */
	
/* 	context.beginPath();
	context.arc(450,450,100,0.3*Math.PI,1.7*Math.PI,false);	
	context.stroke(); */
}
window.addEventListener('load',doFirst,false);