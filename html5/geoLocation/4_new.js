function doFirst(){
	
	var area = document.getElementById('myMap');
	var myPosition = new google.maps.LatLng(24.9,121);
	
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