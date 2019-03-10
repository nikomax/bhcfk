const tabBtn = $('.js-tab-title');
const tabs = $('.js-tab');

tabBtn.on('click', (e) => {
  const parent = $(e.currentTarget).parents('.js-tabs');
  const index = $(e.currentTarget).data('tab');
  if ($(e.currentTarget).hasClass('is-active')) {
    $(e.currentTarget).removeClass('is-active');
    tabs.slideUp();
  } else {
    tabBtn.removeClass('is-active');
    tabs.slideUp();
    $(e.currentTarget).addClass('is-active');
    parent.find(`.js-tab[data-tab="${index}"]`).slideDown();
  }
});
