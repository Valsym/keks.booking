import { addBookingObjects as offers } from './data.js';
import { OFFER_TYPE } from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const renderOffer = ({offer, author, location}) => {
  const offerPreview = cardTemplate.cloneNode(true);
  offerPreview.querySelector('.popup__title').textContent = offer.title;
  offerPreview.querySelector('.popup__text--address').textContent = offer.address ;
  offerPreview.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  offerPreview.querySelector('.popup__type').textContent = Offer_Type[offer.type];
  offerPreview.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  offerPreview.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  const features = offerPreview.querySelectorAll('.popup__feature');
  features.forEach((feature) => {
    feature.classList.add('hidden');
  });
  offer.features.forEach((feature) => {
    let isExistFeature
      = offerPreview.querySelector('.popup__feature--' + feature);
    isExistFeature.textContent = feature;
    isExistFeature.classList.remove('hidden');
  });
  offerPreview.querySelector('.popup__description').textContent = offer.description;
  const popupPhoto
    = offerPreview.querySelector('.popup__photo');
  const popupPhotos
    = offerPreview.querySelector('.popup__photos');
  if (offer.photos.length > 0) {
    offer.photos.forEach((photo, key) => {
      if (key > 0) {
        let newPopupPhoto = popupPhoto.cloneNode(false);
        newPopupPhoto.src = photo;
        popupPhotos.appendChild(newPopupPhoto);
      } else {
        popupPhoto.src = photo;
      }
    });
  } else {
    popupPhoto.classList.add('hidden');
  }
  offerPreview.querySelector('.popup__avatar').src = author.avatar;

  return offerPreview;
}

//Тестовая отрисовка сгенерированных DOM-элементов
const renderOffers = () => {
  const offerListFragment = document.createDocumentFragment();

  // offers.forEach((offer) => {
  //   offerListFragment.appendChild(renderOffer(offer));
  // });

  // Тестовая отрисовка первого из сгенерированных DOM-элементов
  offerListFragment.appendChild(renderOffer(offers()[0]));
  mapCanvas.appendChild(offerListFragment);
};

// Тестовая сгенерированных DOM-элементов
//renderOffers();

export { renderOffers };
