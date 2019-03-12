const tabBtn = $('.js-tab-title');
const tabs = $('.js-tab');

tabBtn.on('click', (e) => {
  const parent = $(e.currentTarget).parents('.js-tabs');
  const index = $(e.currentTarget).data('tab');
  if ($(e.currentTarget).hasClass('is-active')) {
    tabBtn.removeClass('is-active is-unactive');
    tabs.slideUp();
  } else {
    tabBtn.removeClass('is-active is-unactive');
    tabs.slideUp();
    $(e.currentTarget).addClass('is-active');
    const activeTab = parent.find(`.js-tab[data-tab="${index}"]`);
    const unactiveBtns = parent.find('.js-tab-title:not(.is-active)');
    unactiveBtns.addClass('is-unactive');
    const activeContent = parent.find('.js-tab-content');
    activeTab.slideDown();
    setTimeout(() => {
      $('html, body').animate({scrollTop: activeContent.offset().top}, 500);
    }, 100)

  }
});
