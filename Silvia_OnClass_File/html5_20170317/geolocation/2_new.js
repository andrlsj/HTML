function doFirst(){
	if(navigator.geolocation){
		alert('Geolocation support!');
		navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
			enableHighAccuracy: false,
			timeout:1000000
		});
	}else{
		alert('Geolocation NO support!');
	}
}
function succCallback(e){
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	var accuracy = e.coords.accuracy;

	document.getElementById('position').innerHTML = '緯度: '+lati+'<br>經度: '+longi+'<br>準確度: '+accuracy;
}
function errorCallback(e){
//	document.getElementById('position').innerHTML = '錯誤碼: '+e.code+'<br>錯誤訊息: '+e.message;
	alert('錯誤碼: '+e.code+'\n錯誤訊息: '+e.message);
}
window.addEventListener('load',doFirst,false);