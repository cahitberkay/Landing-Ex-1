$(document).ready(function () {
  //NAVBAR BOX-SHADOW CLASS ADD
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("scroll-on");
    } else {
      $("header").removeClass("scroll-on");
    }
  }
});


$(".mobile-menu ul").click(function () {
  if ($(".mobile-nav").hasClass("active")) {
    $(".mobile-nav").removeClass("active");
  }
  else {
    $(".mobile-nav").addClass("active");
  }
});


