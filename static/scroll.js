// $(".container").hide();

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  console.log("ELEMTOP:")
  console.log(elemTop);
  console.log('VIEWPORTBOTTOM:')
  console.log(viewportBottom)
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('.container');

  $elem.each(function(i, val){
    // If the animation has already been started //
    var $e = $(val);

    if (isElementInViewport($e)) {
      // Start the animation
      $e.addClass('start');
      console.log(i)
      console.log($e)
    }else {
      $e.removeClass("start");
    }

  })

}

// Capture scroll events
$(window).scroll(function(){
  checkAnimation();
});
