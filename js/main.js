/*slider*/

$('.carousel').carousel();

/*scroll-on-bg*/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
       $('.header-bottom').addClass('header-fixed');
    }
    else {
       $('.header-bottom').removeClass('header-fixed');
    }
});

/*ImgLoader*/
(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('loadImage');
  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('loadImage');
      return item.nodeName === 'IMG' ? 
      item.src = item.dataset.src :        
      item.style.backgroundImage = `url(${item.dataset.src})`;
    };
});
})();

/*back to top*/

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/*grid view*/

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});

/*filter*/

