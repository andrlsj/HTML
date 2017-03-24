function doFirst(){
	document.getElementById('theFile').onchange=fileChange;
}

function fileChange(){
	var files = document.getElementById('theFile').files; 
	var message = "";
	for(var i = 0;i<files.length;i++){
	
	message += 'File name: '+files[i].name+'\n';
	message += 'File size: '+files[i].size+' byte(s)\n';
	message += 'File type: '+files[i].type+'\n';
	message += 'Last modified: '+files[i].lastModifiedDate+'\n';
	message += "===============================\n"
	
	document.getElementById('fileInfo').value = message;
	}
}

window.addEventListener('load',doFirst,false);