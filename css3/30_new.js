function doFirst()
{
	var list = document.querySelectorAll('p')
	
	for(var i =0;list.length;i++){
		list[i].onclick=talk;	
	}
}

function talk()
{
	alert('hi');
}

window.addEventListener('load',doFirst,false);

window.onload=doFirst;