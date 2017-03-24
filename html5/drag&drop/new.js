function doFirst(){
	image = document.getElementById('image');
	image.addEventListener('dragstart',startDrag,false);
	image.addEventListener('dragend',endDrag,false);
	
	rightbox = document.getElementById('rightbox');
	rightbox.addEventListener('dragenter',function(e){e.preventDefault();},false);
	rightbox.addEventListener('dragover',function(e){e.preventDefault();},false);
	rightbox.addEventListener('drop',dropped,false);
}

function startDrag(e){
	var data = '<img src="../../images/witch.jpg">';
	e.dataTransfer.setData('image/jpeg',data);
	
}
function endDrag(){
	image.style.visibility='hidden';
	
}
function dropped(e){
	e.preventDefault();
	rightbox.innerHTML = e.dataTransfer.getData('image/jpeg');
	
}
window.addEventListener('load',doFirst,false);