const scrollLink = $('.js-scroll-link');

scrollLink.on('click', function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});
