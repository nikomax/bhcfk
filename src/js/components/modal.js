const modalLink = $('.js-modal-link');
const modalClose = $('.js-modal-close');
const modal = $('.js-modal');
const personPhotoContainer = $('.js-person-photo');
const personNameContainer = $('.js-person-name');
const personDescContainer = $('.js-person-desc');
const personIconContainer = $('.js-person-icon');

let personIcon;
let color;

modalClose.on('click', () => {
  modal.removeClass(color);
  modal.fadeOut();
  personIconContainer.removeClass(`icon-${personIcon}`);
});

modalLink.on('click', (e) => {
  e.preventDefault();
  const item = $(e.currentTarget);
  const personPhoto = item.data('person-photo');
  const personName = item.data('person-name');
  const personDesc = item.data('person-desc');
  color = item.data('person-color');
  personIcon = item.data('person-icon');
  personPhotoContainer.attr('src', personPhoto);
  personPhotoContainer.attr('alt', personName);
  personNameContainer.html(personName);
  personDescContainer.html(personDesc);
  personIconContainer.html(`<use xlink:href="img/sprite.svg#icon-${personIcon}"></use>`);
  personIconContainer.addClass(`icon-${personIcon}`);
  modal.addClass(color);
  modal.fadeIn();
});
