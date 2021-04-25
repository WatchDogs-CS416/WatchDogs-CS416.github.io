
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
			console.clear();
			console.log(logo);
		}, 500);
		if (typeof(Storage) !== "undefined") {
			if (sessionStorage.loaded) {
				$(".preloader").fadeOut();
			} else {
				var AsciiMorph = (function() {
					'use strict';
					var element = null;
					var canvasDimensions = {};

					var renderedData = [];
					var framesToAnimate = [];
					var myTimeout = null;

					/**
					 * Utils
					 */

					function extend(target, source) {
						for (var key in source) {
							if (!(key in target)) {
								target[key] = source[key];
							}
						}
						return target;
					}

					function repeat(pattern, count) {
						if (count < 1) return '';
						var result = '';
						while (count > 1) {
							if (count & 1) result += pattern;
							count >>= 1, pattern += pattern;
						}
						return result + pattern;
					}

					function replaceAt(string, index, character ) {
						return string.substr(0, index) + character + string.substr(index+character.length);
					}

					/**
					 * AsciiMorph
					 */

					function init(el, canvasSize) {

						// Save the element
						element = el;
						canvasDimensions = canvasSize;
					}

					function squareOutData(data) {
						var i;
						var renderDimensions = {
							x: 0,
							y: data.length
						};

						// Calculate centering numbers
						for( i = 0; i < data.length; i++ ) {
							if( data[i].length > renderDimensions.x) {
								renderDimensions.x = data[i].length
							}
						}

						// Pad out right side of data to square it out
						for( i = 0; i < data.length; i++ ) {
							if( data[i].length < renderDimensions.x) {
								data[i] = (data[i] + repeat(' ', renderDimensions.x - data[i].length ));
							}
						}

						var paddings = {
							x: Math.floor((canvasDimensions.x - renderDimensions.x) / 2),
							y: Math.floor((canvasDimensions.y - renderDimensions.y) / 2)
						}

						// Left Padding
						for( var i = 0; i < data.length; i++ ) {
							data[i] = repeat(' ', paddings.x) + data[i] + repeat(' ', paddings.x);
						}

						// Pad out the rest of everything
						for( var i = 0; i < canvasDimensions.y; i++ ) {
							if( i < paddings.y) {
								data.unshift( repeat(' ', canvasDimensions.x));
							} else if (i > (paddings.y + renderDimensions.y)) {
								data.push( repeat(' ', canvasDimensions.x));
							}
						}

						return data;
					}

					// Crushes the frame data by 1 unit.
					function getMorphedFrame(data) {

						var firstInLine, lastInLine = null;
						var found = false;
						for( var i = 0; i < data.length; i++) {

							var line = data[i];
							firstInLine = line.search(/\S/);
							if( firstInLine === -1) {
								firstInLine = null;
							}

							for( var j = 0; j < line.length; j++) {
								if( line[j] != ' ') {
									lastInLine = j;
								}
							}

							if( firstInLine !== null && lastInLine !== null) {
								data = crushLine(data, i, firstInLine, lastInLine)
								found = true;
							}

							firstInLine = null, lastInLine = null;
						}

						if( found ) {
							return data;
						} else {
							return false;
						}
					}

					function crushLine(data, line, start, end) {

						var centers = {
							x: Math.floor(canvasDimensions.x / 2),
							y: Math.floor(canvasDimensions.y / 2)
						}

						var crushDirection = 1;
						if( line > centers.y ) {
							crushDirection = -1;
						}

						var charA = data[line][start];
						var charB = data[line][end];

						data[line] = replaceAt(data[line], start, " ");
						data[line] = replaceAt(data[line], end, " ");

						if( !((end - 1) == (start + 1)) && !(start === end) && !((start + 1) === end)) {
							data[line + crushDirection] = replaceAt(data[line + crushDirection], (start + 1), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
							data[line + crushDirection] = replaceAt(data[line + crushDirection], (end - 1), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
						} else if ((((start === end) || (start + 1) === end)) && ((line + 1) !== centers.y && (line - 1) !== centers.y && line !== centers.y)) {
							data[line + crushDirection] = replaceAt(data[line + crushDirection], (start), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
							data[line + crushDirection] = replaceAt(data[line + crushDirection], (end), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
						}

						return data;
					}

					function render(data) {
						var ourData = squareOutData(data.slice());
						renderSquareData(ourData);
					}

					function renderSquareData(data) {
						element.innerHTML = '';
						for( var i = 0; i < data.length; i++ ) {
							element.innerHTML = element.innerHTML + data[i] + '\n';
						}

						renderedData = data;
					}

					// Morph between whatever is current, to the new frame
					function morph(data) {

						clearTimeout(myTimeout);
						var frameData = prepareFrames(data.slice());
						animateFrames(frameData);
					}

					function prepareFrames(data) {

						var deconstructionFrames = [];
						var constructionFrames = [];

						var clonedData = renderedData

						// If its taking more than 100 frames, its probably somehow broken
						// Get the deconscrution frames
						for(var i = 0; i < 100; i++) {
							var newData = getMorphedFrame(clonedData);
							if( newData === false) {
								break;
							}
							deconstructionFrames.push(newData.slice(0));
							clonedData = newData;
						}

						// Get the constuction frames for the new data
						var squareData = squareOutData(data);
						constructionFrames.unshift(squareData.slice(0));
						for( var i = 0; i < 100; i++ ) {
							var newData = getMorphedFrame(squareData);
							if( newData === false) {
								break;
							}
							constructionFrames.unshift(newData.slice(0));
							squareData = newData;
						}

						return deconstructionFrames.concat(constructionFrames)
					}

					function animateFrames(frameData) {
						framesToAnimate = frameData;
						animateFrame();
					}

					function animateFrame() {
						myTimeout = setTimeout(function() {

							renderSquareData(framesToAnimate[0]);
							framesToAnimate.shift();
							if( framesToAnimate.length > 0 ) {
								animateFrame();
							}
						}, 5);

						// framesToAnimate
					}

					function terminate(){
						clearTimeout(myTimeout);
					}

					function main(element, canvasSize) {

						if( !element || !canvasSize ) {
							console.log("sorry, I need an element and a canvas size");
							return;
						}

						init(element, canvasSize);
					}

					return extend(main, {
						render: render,
						morph: morph
					});

				})();

				var element = document.querySelector('pre');
				AsciiMorph(element, {x: 51,y: 28});

				var asciis = [
					["     11                                              01","    0101                                            1101","    11100                                          00001","   1110100                  00                    101000","    01 111                 0100                  1000010","   111  110               0110010                100 0011","   110  1010             111   0100             000  1100","   100   011            101      001           1001   111","   110    000          111        100          110    010","   011     100       111           0101       000     011","   11      111      101             0101     1000     100","  110       100    001                101    100      011","  100        011 0100                  101  110        101","  001        110111                     0011101        111","  010         1001                        1100         011"," 1011        10000                        1011         011","  11        100111       Watch Dogs      1110100       110"," 101       101  010                      010  011      110"," 011      010    111                    111    011     1101"," 001    1111101000100111100111001100101110101100010     110"," 000   0111001010010011010001101111001001111111010000   010"," 001  111          010                001          100  010","01110111           010               111            001 111","000111              101              111             0010011","00010                000            101                00001","0010                 101           1100                 1100","001                   101          001                   111","                      1100        011","                       101       010","                        100      100","                         111    101","                         110    01","                          101  001","                           100001","                           10011","                            111"],
					["$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$_$$$$$$$$$$$$$$$$_$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$__$$$$$$$$$$$$$$_$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$$_______________$$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$___________________$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$____$$$_________$$$____$$$$$$$$$$$$$","$$$$$$$$$$$$$_____$$$_________$$$_____$$$$$$$$$$$$","$$$$$$$$$$$$___________________________$$$$$$$$$$$","$$$$$$$$$$$$___________________________$$$$$$$$$$$","$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$","$$$$_____$$$_________.--------._________$$$____$$$","$$$$_____$$$________/ .------. \\________$$______$$","$$$$_____$$$_______/ /        \\ \\_______$$______$$","$$$$_____$$$_______| |________| |_______$$______$$","$$$$_____$$$____.' |_|        |_| '.____$$______$$","$$$$_____$$$____'._____ ____ _____.'____$$______$$","$$$$_____$$$____|     .'____'.     |____$$______$$","$$$$_____$$$____'.__.'.'    '.'.__.'____$$______$$","$$$$______$$____'.__  |Secure|  __.'____$$______$$","$$$$_____$$$____|   '.'.____.'.'   |____$$______$$","$$$$$___$$$$____'.____'.____.'____.'____$$$___$$$$","$$$$$$$$$$$$____'.________________.'____$$$$$$$$$$","$$$$$$$$$$$$____________________________$$$$$$$$$$","$$$$$$$$$$$$___________________________$$$$$$$$$$$","$$$$$$$$$$$$$$$$$______$$$$$$_____$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$______$$$$$$_____$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$______$$$$$$_____$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$______$$$$$$_____$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$______$$$$$$_____$$$$$$$$$$$$$$$$","$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"]
				];
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
