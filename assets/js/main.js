
hljs.highlightAll();

function foo() {
	console.log("Team Watch Dogs | CS 416[2021] | IIT Bombay");
}
(function ($)
{ "use strict"
	$(".side-menu-content>ul>li>a").on("click",function (e){
		e.preventDefault();
		let target = $(this).attr('href');
		if($(window).width()<=786){
			$(".slided").removeClass('slided');
			$(".hide").removeClass('hide');
			$("#close_btn").toggleClass('shw');
			$('html, body').animate({
				scrollTop: $(target).offset().top - 56 // Means Less header height
			},10);
		}
		else{
			$('html, body').animate({
				scrollTop: $(target).offset().top - 56 // Means Less header height
			},10);
		}
	});
	var contentWayPoint = function() {
		var i = 0;
		$('.waypt-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('waypt-animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .waypt-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn waypt-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft waypt-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight waypt-animated');
							} else {
								el.addClass('fadeInUp waypt-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};
	contentWayPoint();
})(jQuery);
