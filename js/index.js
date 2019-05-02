// Initialize carousel slider

if ( $(window).width() < 768 ) {
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      stagePadding: 30,
      margin: 4,
      loop: true
    });
  });
} else if ( $(window).width() < 1024 ) {
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      stagePadding: 30,
      margin: 4,
      loop: true
    });
  });
} else {
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      stagePadding: 30,
      margin: 4,
      loop: true,
      nav: true
    });
  })
}


// Responsive music widget

$(window).on('load resize', function() {
  $('iframe[src*="embed.spotify.com"]').each( function() {
    $(this).css('width', $(this).parent().css('width'));
    $(this).attr('src', $(this).attr('src'));
    $(this).removeClass('loaded');

    $(this).on('load', function(){
      $(this).addClass('loaded');
    });
  });
});

// Header change waypoint

const pageHeader = document.getElementById('header');

var waypoint = $('#bio').waypoint(function(direction) {
  if (direction === 'down') {
    pageHeader.style.background = '#0C1627';
  } else if (direction === 'up') {
    pageHeader.style.background = 'rgba(12, 22, 39, 0)';
  }
},
{
  offset: 125
});

// var waypoints = $('#bio').waypoint(function(direction) {
//   if (direction === 'down') {
//     pageHeader.style.background = '#0C1627';
//   else if (direction === 'up') {
//     pageHeader.style.background = 'rgba(12, 22, 39, 0)';
//   }
// });
