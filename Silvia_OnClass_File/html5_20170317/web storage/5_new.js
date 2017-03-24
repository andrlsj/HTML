function storageAccess(accessId){
	var storage = localStorage;
	var key = document.getElementById('keyText').value;
	var value = document.getElementById('valueText').value;
	
	alert(storage.length);

	switch(accessId){
		case 0:
			storage.setItem(key,value);
			break;
		case 1:
			var item = storage.getItem(key);
			alert(item);
			break;
		case 2:
			storage.removeItem(key);
			break;
		case 3:
			storage.clear();
			break;
		default:	
			break;		
	}//end of switch
}