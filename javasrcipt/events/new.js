function doFirst(){
	document.getElementById('theForm').onsubmit = setEvent;
}
function setEvent(){

	
	var events = ['click','contextmenu','select','keypress','change'];
	
	for(var i=0; i<events.length; i++){
		var theEvent = document.getElementById(events[i]);
		
		if(theEvent.checked){
			document.addEventListener(events[i],report,false);
		}else{
			document.removeEventListener(events[i],report,false);
		}
	}
	
	
	document.getElementById('output').value = '';
	return false;
}

function report(e){
	var feedback = e.target.nodeName + ' / ' + e.type + '\n';
	document.getElementById('output').value += feedback;
}
window.addEventListener('load',doFirst,false);