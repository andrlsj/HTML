

var width = $('#slideBoard').width();
var imgCount = $('#content li').length;

$('#content').width(width * imgCount);
$('#content li').width(width);

for(var i=0; i<imgCount; i++){
	$('#contentButton').append('<li></li>');
}

var index = 0;
$('#contentButton li:first-child').addClass('activeImg');



$('#contentButton li').click(function(){
	index = $(this).index();
	
	$('#content').animate({
		left: width * index * -1
	});
	
	$(this).addClass('activeImg').siblings('.activeImg').removeClass('activeImg');
});




