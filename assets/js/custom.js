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
