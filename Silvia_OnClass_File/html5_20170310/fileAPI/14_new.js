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
	readFile.readAsDataURL(file);
	readFile.addEventListener('load',function(){
		var myMovie = document.getElementById('myMovie');
		myMovie.src = this.result;
		myMovie.controls = true;
		myMovie.width = 512;
	},false);
}
window.addEventListener('load',doFirst,false);