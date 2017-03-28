var storage = sessionStorage;
function doFirst(){
	var itemString = storage.getItem('addItemList');	//var itemString = storage['addItemList'];
	var items = itemString.substr(0,itemString.length-2).split(', ');
	
	newItem = document.createElement('div');
	newTable = document.createElement('table');
	
	
	subtotal = 0; 
	//每購買一個品項就新增一個tr
	for(var key in items){	//use items[key]
		var itemInfo = storage.getItem(items[key]);	//var itemInfo = storage[items[key]];
		createCartList(items[key],itemInfo);
		
		var itemPrice = parseInt(itemInfo.split('|')[2]);		
		subtotal += itemPrice;
	}
	document.getElementById('subtotal').innerText = subtotal;
	
	
	
	newItem.appendChild(newTable);
	document.getElementById('cartList').appendChild(newItem);
	
	
}

function createCartList(itemKey, itemInfo){
	
	console.log(itemKey +" : "+ itemInfo)
	
	var itemTitle = itemInfo.split('|')[0];
	var itemImage = 'imgs/'+itemInfo.split('|')[1];
	var itemPrice = parseInt(itemInfo.split('|')[2]);
	
	
	//建立每個品項的清單區域 --tr
	var trItemList = document.createElement('tr');
	trItemList.className = 'item';
	newTable.appendChild(trItemList);
	
	//建立圖片 
	
	var tdImage = document.createElement('td');
	tdImage.style.width = '200px';
	
	var image = document.createElement('img');
	image.src = itemImage;
	image.width = '100';
	
	tdImage.appendChild(image);
	trItemList.appendChild(tdImage);

	
	//建立商品名稱及刪除鍵

	var tdTitle = document.createElement('td');
	tdTitle.style.width = '280px';
	tdTitle.id = itemKey;
	
	var pTitle = document.createElement('p');
	pTitle.innerHTML = 'itemTitle';

	var button = document.createElement('button');
	button.innerHTML = 'Delete';
	button.addEventListener('click',deleteItem,false);
	
	tdTitle.appendChild(pTitle)
	tdTitle.appendChild(button)
	trItemList.appendChild(tdTitle)



	
	
	//建立商品價格
	
	var tdPrice = document.createElement('td');
	tdPrice.style.width = '170px';
	tdPrice.innerText = itemPrice;
	
	trItemList.appendChild(tdPrice);
	
	
	
	//建立商品數量
	var tdItemCount = document.createElement('td');
	tdItemCount.style.width='60px';
	
	var itemCount = document.createElement('input');
	itemCount.type = 'number';
	itemCount.min = 0;
	itemCount.value =1;
	
	itemCount.addEventListener('input', addItemCount, false);
	
	tdItemCount.appendChild(itemCount);
	trItemList.appendChild(tdItemCount);
	
	
	
	
	
	
	
	
}

function deleteItem(){
	console.log("hoho")
	//刪除該資料前 將金額扣除
	var itemId = this.parentNode.getAttribute('id');
	var itemValue = storage.getItem(itemId);
	subtotal -= parseInt(itemValue.split('|')[2]);
	document.getElementById('subtotal').innerText = subtotal;
	
	//清除storage資料
	storage.removeItem(itemId);
	storage['addItemList']=storage['addItemList'].replace(itemId+', ','');
	
	//
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	
	
	
	
	
}

function addItemCount(){
	console.log("hehe")
}


window.addEventListener('load', doFirst, false);
