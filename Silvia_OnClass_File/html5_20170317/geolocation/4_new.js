function doFirst(){
	var myPosition = new google.maps.LatLng(24.968618,121.191557);
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