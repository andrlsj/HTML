function doFirst(){
	document.getElementById('dropZone').ondropover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;

}

function dragOver(e){
	e.preventDefault();
}

function dropped(e){
	e.preventDefault();
	
	var file = e.dataTransfer.files[0];
	document.getElementById('fileName').innerHTML=file.name;
	
	var readFile = new FileReader();
	readFile.readAsText(file);
	readFile.addEventListener('load',function(e){
		document.getElementById('fileContent').value = e.target.result;
	},false);
	
}


window.addEventListener('load',doFirst,false);