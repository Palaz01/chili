$(function(){
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('.navbar').addClass('scroll-nav');
      $('.logo').addClass('scroll-brand');
    } else {
      $('.navbar').removeClass('scroll-nav');
      $('.logo').removeClass('scroll-brand');
    }
  });
});
