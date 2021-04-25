
hljs.highlightAll();

function foo() {
	console.log("Team Watch Dogs | CS 416[2021] | IIT Bombay");
}
(function ($)
{ "use strict"
	if ($(window).width()<736){
		alert("This website is made for Desktop View only.\n\nPlease switch to a larger screen to have a better experience.");
	}
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
	$(window).on('load', function () {
		let logo = "     11                                              01     \n    0101                                            1101    \n    11100                                          00001    \n   1110100                  00                    101000    \n    01 111                 0100                  1000010    \n   111  110               0110010                100 0011   \n   110  1010             111   0100             000  1100   \n   100   011            101      001           1001   111   \n   110    000          111        100          110    010   \n   011     100       111           0101       000     011   \n   11      111      101             0101     1000     100   \n  110       100    001                101    100      011   \n  100        011 0100                  101  110        101  \n  001        110111                     0011101        111  \n  010         1001                        1100         011  \n 1011        10000       Watch Dogs       1011         011  \n  11        100111                       1110100       110  \n 101       101  010                      010  011      110  \n 011      010    111                    111    011     1101 \n 001    1111101000100111100111001100101110101100010     110 \n 000   0111001010010011010001101111001001111111010000   010 \n 001  111          010                001          100  010 \n01110111           010               111            001 111 \n000111              101              111             0010011\n00010                000            101                00001\n0010                 101           1100                 1100\n001                   101          001                   111\n                      1100        011                       \n                       101       010                        \n                        100      100                        \n                         111    101                         \n                         110    01                          \n                          101  001                          \n                           100001                           \n                           10011                            \n                            111                             "	;
		setTimeout(function (){
			// console.clear();
			// console.log(logo);
		}, 500);
		if (typeof(Storage) !== "undefined") {
			if (sessionStorage.loaded) {
				$(".preloader").fadeOut();
			} else {
				AsciiMorph.render(asciis[0]);


				setTimeout(function() {
					AsciiMorph.morph(asciis[1]);
				}, 1000);

				// var currentIndex = 2;
				// setInterval(function() {
				// 	AsciiMorph.morph(asciis[currentIndex]);
				// 	currentIndex++;
				// 	currentIndex%= asciis.length;
				// }, 2000);
				sessionStorage.loaded = 1;
				setTimeout(function (){
					$(".preloader").fadeOut();
				}, 2000);
			}
		} else {
			$(".preloader").fadeOut();
		}
	});
})(jQuery);
