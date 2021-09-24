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



$('#galleryMain').justifiedGallery({
    lastRow : 'nojustify', 
    rowHeight : 160, 
    rel : 'eng-gallery',
    margins : 3
}).on('jg.complete', function () {
    $('a.fancyImg').fancybox({
		'hideOnContentClick': true,
		afterLoad: function() {
			_gaq.push(['_trackEvent','FancyBox','Open',this.href, ,true]);
			// console.log("Fancy");
		},		
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});



// var thisHash = window.location.hash;

//     $('#rsvp').fancybox({
//         'hideOnContentClick': true,
//         closeBtn: true,
// 		helpers: {
// 			overlay: {
// 				locked: false
// 			}
// 		},
//         beforeShow: function() {
//             var id = this.element.attr("id")
//             if (id) {
//                 window.location.hash = id;
//             }
//         },
//         beforeClose: function() {
//             window.location.hash = "";
//         }
//     });

//     if (thisHash) {
//         $(thisHash).trigger('click');
//     }



    ///// Window Width Responsive

    var $window = $(window);
	var windowsize = $window.width();    

	function checkWidth() {
		if (windowsize > 992) {
			navHover();
			$(".navbar-fixed-top").removeClass("top-nav-collapse");			
		}
		// else if (windowsize < 992) {
  //       	$(".navbar-fixed-top").addClass("top-nav-collapse");
		// }
		else {}
	}
   // Execute on load
   	checkWidth();
   // Bind event listener
   	$(window).resize(checkWidth);



// $(window).resize(function() {
//    console.log($window.width());
//  });





// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50 ) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
	else if( $(".navbar").offset().top < 50 ) {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    } 
    else {}
};

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
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