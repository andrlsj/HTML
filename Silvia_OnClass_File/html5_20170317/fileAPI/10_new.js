function doFirst(){
	document.getElementById('dropZone').ondragover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();

	var file = e.dataTransfer.files[0];
	
	document.getElementById('fileName').innerHTML = file.name;
	
	var readFile = new FileReader();
	readFile.readAsText(file);
	readFile.addEventListener('load',function(){
		document.getElementById('fileContent').value = this.result;
	},false);
}
window.addEventListener('load',doFirst,false);