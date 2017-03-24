var storage = sessionStorage;

function doFirst(){
   
   if(storage['addItemList'] == null){
	   storage['addItemList'] = null;
	   //storage.setItem('addItemList':'');
   }
   
   //幫助每個鍵作事件聆聽
  var list = document.querySelectorAll('.addButton');		//list是陣列
	
	for(var i=0; i<list.length; i++){
		list[i].addEventListener('click', function(){
			var teddyInfo = document.querySelector('#'+this.id+' input').value;
			addItem(this.id, teddyInfo);
		}, false);
	}
   
}

function addItem(itemId,itemValue){
	var image = document.createElement('img');
	image.src = 'imgs/' + itemValue.split('|')[1];
	image.id = 'imageSelect';
	
	var title = document.createElement('span');
	title.innerText = itemValue.split('|')[0];

	var price = document.createElement('span');
	price.innerText = itemValue.split('|')[2];
	
	var newItem = document.getElementById('newItem');
	

	
	if(newItem.hasChildNodes()){
		while(newItem.childNodes.length >= 1){
			newItem.removeChild(newItem.firstChild);
			
		}
	}
	
	newItem.appendChild(image);
	newItem.appendChild(title);
	newItem.appendChild(price);
}

window.addEventListener('load', doFirst, false);





