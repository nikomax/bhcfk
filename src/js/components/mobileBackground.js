const bgItem = $('.js-background-position');

function setBgPosition() {
  if ($(window).width() < 768) {
    bgItem.each((index, item) => {
      const pos = $(item).data('mobile-position');
      $(item).css('background-position-x', pos);
    })
  }
}
if (bgItem.length) {
  setBgPosition();
  $(window).resize(() => {
    setBgPosition();
  });
}
