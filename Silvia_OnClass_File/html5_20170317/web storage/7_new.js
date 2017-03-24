var storage = localStorage;
function doFirst(){
	storage.clear();
	for(var i=0; i<20; i++){
		storage.setItem('key '+i,'value '+i);
	}
	
	document.getElementById('getButton').addEventListener('click',getIndex,false);
}
function getIndex(){
	var index = document.getElementById('indexText').value;
	var key = storage.key(index);
	var value = storage.getItem(key);
	
	alert('Index '+index+' : '+key+' / '+value);
}
window.addEventListener('load',doFirst,false);

