$(document).ready(function(){
	/* var size = parseInt($('#names li').css('fontSize'));	
	alert(size); */
	/* 
	$('#smallButton').click(function(){});
	$('#bigButton').click(function(){}); 
	*/
	
	$('#smallButton').click(function(){
		changeSize('smaller');
	});
	$('#bigButton').click(function(){
		changeSize('bigger');
	});
	
	function changeSize(size){
		var currentSize = parseInt($('#names li').css('fontSize'));
		
		if(size == 'smaller'){
			var newSize = currentSize - 1;
		}else if(size == 'bigger'){
			var newSize = currentSize + 1;
		}
		
		
		$('#names li').css('fontSize', newSize+'px');
	}
});