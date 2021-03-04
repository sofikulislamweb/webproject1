// ============stiky bar===============
$(window).scroll(function () {
  var scrollamount = $(window).scrollTop()

  if (scrollamount > 150) {
    $(".menu").addClass("fixed")
  } else {
    $(".menu").removeClass("fixed")
  }

  if (scrollamount > 150) {
    $(".btop").fadeIn();
  } else {
    $(".btop").fadeOut();
  }
})




// ===========popup===========
$(".srce").click(function () {
  $(".box").slideDown();
})

$(".btn").click(function () {
  $(".box").slideUp();
})



// banner slider

$('.banners').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,

})


// count down js

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}

  }, second)



// counter js
$('.counter').counterUp({
  delay: 10,
  time: 3000
});

// play button

$('#play-video').on('click', function (e) {
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/watch?v=t1dVen8SQSY" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};