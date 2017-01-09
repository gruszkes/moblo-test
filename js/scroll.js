		jQuery(function($)
		{
			//reset scroll
			$.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('#mail'), 1000); });
			$('#link2').click(function() { $.scrollTo($('#repair'), 1000); });
			$('.scrollup').click(function() {
				$("html, body").animate({ scrollTop: 0 }, "slow");
			});

		}
		);
		
		//show the scroll
		$(window).scroll(function()	{
			if ($(window).scrollTop() > $('#header').outerHeight()) {
				$('.scrollup').fadeIn();
			} else if ($(window).scrollTop() == 0) {
				$('.scrollup').fadeOut();
			}
		});
		