(function ($)
{ "use strict"
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
