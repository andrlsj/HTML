$(document).ready(function(){
	/* var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink'); */
	
	/* $('#addButton').click(function(){}); */
	
	function addOrder(order){
		$('#orders').append('<li>Name: '+order.name+', Drink: '+order.drink+'</li>');
	}
	
	$.ajax({
		type: 'GET',
		url : 'api/orders',
		success: function(){
			$.each(orders,function(i, order){
				addOrder(order);
			});
		},
		error: function(){
			alert('error loading orders');
		}
	});
	
	
	$('#addButton').on('click',function(){
		var order = {
			name : $('#name').val(),
			drink: $('#drink').val()
		};
		$.ajax({
			type: 'POST',
			url : '/api/orders',
			data: order,
			success: function(newOrder){
				addOrder(newOrder);
			},
			error:function(){
				alert('error saving order');
			}
		});
	});
});