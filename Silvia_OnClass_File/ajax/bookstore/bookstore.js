var ajax = new XMLHttpRequest();
function doFirst(){
	ajax.open('GET', 'bookstore.xml', true);
	ajax.onreadystatechange = serverResponse;
	ajax.send(null);
}
function serverResponse(){
	if(ajax.readyState == 4){
		if(ajax.status == 200){
			xmlResponse = ajax.responseXML;
			root = xmlResponse.documentElement;
			names = root.getElementsByTagName('name');	//names¬O°}¦C
			isbns = root.getElementsByTagName('isbn');	//isbns¬O°}¦C
			
			var author = '';
			for(var i=0; i<names.length; i++){
			//	author += names.item(i).firstChild.data + ' - '+isbns.item(i).firstChild.data+'<br>';
				author += names[i].firstChild.data + ' - '+isbns[i].firstChild.data+' - '+names[i].getAttribute('age')+'<br>';
			}
			
			
			document.getElementById('feedback').innerHTML = author ;		
		}
	}
}
window.addEventListener('load',doFirst,false);