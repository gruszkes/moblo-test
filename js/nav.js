
	$(document).ready(function() {
	var NavY = $('#header').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('#header').addClass('sticky');
		$('#orange').css('margin-top', $('#header').outerHeight());
	} else {
		$('#header').removeClass('sticky'); 
		$('#orange').css('margin-top', 0);
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});
	