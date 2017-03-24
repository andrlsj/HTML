function doFirst(){
	navigator.geolocation.getCurrentPosition(succCallback);
}
function succCallback(e){
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	var accuracy = e.coords.accuracy;

	document.getElementById('position').innerHTML = '緯度: '+lati+'<br>經度: '+longi+'<br>準確度: '+accuracy;


	var myPosition = new google.maps.LatLng(lati,longi);
	var area = document.getElementById('myMap');
	
	var map = new google.maps.Map(area,{
		zoom: 14,
		center: myPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}); 

	var marker = new google.maps.Marker({
		position: myPosition,
		map: map,
		icon: '../../images/number/dgtp.gif',
		title: '這是資策會'
	});
}
window.addEventListener('load',doFirst,false);