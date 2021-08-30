$(document).ready(function() {

	// Nav Hover Function
	function navHover() {
		$('nav.navbar-custom').hover(function() {
			$(this).stop().toggleClass('hovered');
		});
		$('ul.nav li').hover(function() {
			$(this).children('.subNav').stop().toggleClass('hovered');
		});	
		$('ul.nav li').hover(function() {
			subNavVal = $(this).children('.subNav').length;
			// console.log(subNavVal);
			if ((subNavVal) > 0) {
				$(this).toggleClass('darrowed');
			}
		});		
	};

	// $( window ).resize(function() {

		// console.log("window resized");

	 //    if ( $(window).width() >= 992) {
	   



		// }; // End MQ Responsive JS @ 768

	// }); // End MQ Responsive WindowResize Event





    ///// Window Width Responsive

    var $window = $(window);

	function checkWidth() {
		var windowsize = $window.width();
		if (windowsize > 992) {
			navHover();
		}
	}
   // Execute on load
   	checkWidth();
   // Bind event listener
   	$(window).resize(checkWidth);



$(window).resize(function() {
   console.log($window.width());
 });


// function hammertime () {

// var end = new Date('02/03/2017 9:00 AM');

//     var _second = 1000;
//     var _minute = _second * 60;
//     var _hour = _minute * 60;
//     var _day = _hour * 24;
//     var timer;

//     function showRemaining() {
//         var now = new Date();
//         var distance = end - now;
//         if (distance < 0) {

//             clearInterval(timer);
//             document.getElementById('countdown').innerHTML = 'EXPIRED!';

//             return;
//         }
//         var days = Math.floor(distance / _day);
//         var hours = Math.floor((distance % _day) / _hour);
//         var minutes = Math.floor((distance % _hour) / _minute);
//         var seconds = Math.floor((distance % _minute) / _second);

//         document.getElementById('countdown').innerHTML = days + ' Days, ';
//         document.getElementById('countdown').innerHTML += hours + ' hours, ';
//         document.getElementById('countdown').innerHTML += minutes + ' minutes, and ';
//         document.getElementById('countdown').innerHTML += seconds + ' seconds';
//     }

//     timer = setInterval(showRemaining, 1000);

// };









}); // End DocReady