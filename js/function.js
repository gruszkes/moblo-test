$(document).ready(function(){
	slider();
});

function slider(){

	$('.control-dot').first().addClass('active');
	$('.slider-unit').first().addClass('active');

	$('.control-dot').click(function(){
		var $this = $(this),
		    $dotLength = $this.parent().children(),
		    position = $dotLength.index($this);

		$('.control-dot').removeClass('active').eq(position).addClass('active');
		$('.slider-unit').removeClass('active').eq(position).addClass('active');
	});
};	
