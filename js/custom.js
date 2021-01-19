// Menu.
$('#menu')
.append('<a href="#menu" class="close"></a>')
.appendTo($body)
.panel({
  delay: 500,
  hideOnClick: true,
  hideOnSwipe: true,
  resetScroll: true,
  resetForms: true,
  side: 'right'
});

// Header.
if (skel.vars.IEVersion < 9)
$header.removeClass('alt');

if ($banner.length > 0
&&	$header.hasClass('alt')) {

$window.on('resize', function() { $window.trigger('scroll'); });

$banner.scrollex({
  bottom:		$header.outerHeight(),
  terminate:	function() { $header.removeClass('alt'); },
  enter:		function() { $header.addClass('alt'); },
  leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
});

}


 
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-1.jpg' },
            { src: 'images/slide-2.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });


   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

