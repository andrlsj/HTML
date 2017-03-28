var storage = sessionStorage;

function doFirst(){
   
   if(storage['addItemList'] == null){
	   storage['addItemList'] = "";
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
	
	//存入storage
	if(storage[itemId]){
		/* alert('Checked.'); */
		console.log("you have checked")
	}else{
		storage['addItemList'] += itemId + ', ';
		storage[itemId] = itemValue;
	}
	
	//計算購買數量和小計
	var itemString = storage.getItem('addItemList');	//var itemString = storage['addItemList'];
	var items = itemString.substr(0,itemString.length-2).split(', ');
	
	console.log(items.length)
		
	var subtotal = 0;
	for(var key in items){
		var itemInfo = storage.getItem(items[key]);
		var itemPrice = parseInt(itemInfo.split('|')[2]);
		subtotal += itemPrice;
	}

	
	document.getElementById('itemCount').innerText = items.length;
	document.getElementById('subtotal').innerText = subtotal;
	
}

window.addEventListener('load', doFirst, false);





