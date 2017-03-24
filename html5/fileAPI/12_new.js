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
	
	readFile.addEventListener('load',function(e){
		var image = document.getElementById('image');
		image.src = this.result;
		image.style.maxWidth = '500px';
		image.style.maxHeight = '500px';
		
	},false);


	
	
}


window.addEventListener('load',doFirst,false);