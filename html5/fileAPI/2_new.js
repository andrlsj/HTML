function doFirst(){
	document.getElementById('theFile').onchange=fileChange;
}

function fileChange(){
	var file = document.getElementById('theFile').files[0]; 
	
	var message = 'File name:' + file.name +'\n';
	message += 'File size:' + file.size +'\n';
	message += 'File type:' + file.type +'\n';
	message += 'File modified:' + file.lastModifiedDate +'\n';
	
	document.getElementById('fileInfo').value = message;
	
}

window.addEventListener('load',doFirst,false);