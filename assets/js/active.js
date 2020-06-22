$(document).ready(function(){
	
			$(".top").click(function(){
				$("html,body").animate({scrollTop:0},800);
			});
			
		  $(window).on('scroll',function() {    
			   var scroll = $(window).scrollTop();
			   if (scroll < 300) {
				$(".header-area").removeClass("scroll-header");
			   }else{
				$(".header-area").addClass("scroll-header");
			   }
		  });
	  
	  
	 $('.active').owlCarousel({
		loop:true,
		nav:true,
		navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		/* autoplay:true,
		autoplayTimeout:5000, */
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:1
			}



			
		}
	})
	
	/*video pop-up*/
	
	$('.video-popup').magnificPopup({
	  type: 'iframe'  /*for video use iframe for image use image*/
	  // other options
	});
	
	/* //scroll-to-top
	$(".scrolltobottom").click(function(){
		$("html, body").animate({
			scrollTop:0
			},100000);
		return false;
	}) */
	
});


