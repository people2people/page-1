$(document).ready(function() {
    $('#questionWrapper .question').first().show(); //show first questionblock

    $("#questionWrapper .answer" ).click(function( event ) {
      event.preventDefault();
      if ($(this).attr('class') == 'answer cannotContinue' ) {
        alert('Sorry, you need to be 16 or above to participate in this survey.');
        return;
      }
      else {
        $(this).parent('.question').fadeOut(200);
        if ($(this).parent().next('.question').length) {
          $(this).parent().next('.question').delay(200).fadeIn();
        }
        else {
          startCheck();
        }
      }
    });
  });
  function startCheck() {
      var overlay = $('.overlay-checker'),
          points = $('.overlay-checker-points > li');

      var page1 = $('#header'),
          page2 = $('#page2');

      // Initially, hide all the points so we can show them one by one
      points.hide();

      // Fade in the overlay
      overlay.fadeIn();

      // Loop points.lenght times (so through every point)
      for (i = 0; i < points.length; i++)
      {
        setTimeout(function ()
        {
          $('.overlay-checker-points').find(':hidden').first().fadeIn();
        }, 1500 * (i + 1));
      }
      setTimeout(function ()
      {
        page1.hide();
        page2.show();
        overlay.fadeOut();
      },6000);
      /*
      // After all items have been faded in, redirect
     setTimeout(function () {
        window.location = $('.redirectNow').attr('href');
      }, 1500 * points.length + 2000);
      */
  }
  