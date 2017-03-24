function doFirst(){
var canvas2 = document.getElementById("canvas");
var c2 = canvas2.getContext("2d");
 
c2.beginPath();
c2.moveTo(235, 0);
c2.lineTo(275, 121);
c2.lineTo(383, 55);
c2.lineTo(338, 173);
c2.lineTo(465, 196);
c2.lineTo(354, 258);
c2.lineTo(436, 356);
c2.lineTo(311, 322);
c2.lineTo(310, 457);
c2.lineTo(232, 363);
c2.lineTo(150, 458);
c2.lineTo(150, 332);
c2.lineTo(30, 355);
c2.lineTo(110, 259);
c2.lineTo(0, 197);
c2.lineTo(125, 172);
c2.lineTo(79, 54);
c2.lineTo(200, 120);







c2.closePath(); 
 
c2.fillStyle = "orange";


c2.fill();
	
	

	
	
}
window.addEventListener('load',doFirst,false);