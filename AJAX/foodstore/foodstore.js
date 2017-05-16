var ajax = new XMLHttpRequest();
function doFirst(){
	if(ajax.readyState == 0 || ajax.readyState == 4){
		food = encodeURIComponent(document.getElementById('userInput').value); //±N¦r¦êÂà¦¨UTF-8
		
		ajax.open('GET', 'foodstore.php?food='+food, true);
		ajax.onreadystatechange = serverResponse;
		ajax.send(null);
	}else{
		setTimeout('doFirst()',1000);
	}
}
function serverResponse(){
	if(ajax.readyState == 4){
		if(ajax.status == 200){
			/* xmlResponse = ajax.responseXML;
			xmlDocumentElement = xmlResponse.documentElement; */
			xmlResponse = ajax.responseXML.documentElement;
			message = xmlResponse.firstChild.data;
			
			document.getElementById('feedback').innerHTML = message ;
			
			setTimeout('doFirst()',1000);
		}else{
			alert('Something went wrong!');
		}
	}
}
window.addEventListener('load',doFirst,false);