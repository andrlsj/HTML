function doFirst(){
	document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
	var file = document.getElementById('theFile').files[0];
	var message = 'File name: '+file.name+'\n';
	message += 'File size: '+file.size+' byte(s)\n';
	message += 'File type: '+file.type+'\n';
	message += 'Last modified: '+file.lastModifiedDate+'\n';	
	document.getElementById('fileInfo').value = message;
	
	var readFile = new FileReader();
	readFile.readAsText(file);
	readFile.addEventListener('load',function(e){
		document.getElementById('fileContent').value = e.target.result;
	},false);
}
window.addEventListener('load',doFirst,false);