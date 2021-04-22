
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
	})
})(jQuery);
