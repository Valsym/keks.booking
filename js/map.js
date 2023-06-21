import { OFFER_TYPE, MAIN_ADDRESS } from './utils.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const address = adForm.querySelector('#address');

let markers = [];

const makeMapNotActive = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((child) => {
    child.classList.add('disabled');
  });

  mapFilters.classList.add('ad-form--disabled');
  mapFilters.querySelectorAll('select').forEach((child) => {
    child.classList.add('disabled');
  });
  mapFilters.querySelectorAll('fieldset').forEach((child) => {
    child.classList.add('disabled');
  });
}

const makeMapActive = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((child) => {
    child.classList.remove('disabled');
  });

  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.querySelectorAll('select').forEach((child) => {
    child.classList.remove('disabled');
  });
  mapFilters.querySelectorAll('fieldset').forEach((child) => {
    child.classList.remove('disabled');
  });
}

/* global L:readonly */
let map = L.map('map-canvas')
  .setView(
    MAIN_ADDRESS,
    11);

if (map) {
  makeMapActive();
} else {
  makeMapNotActive();
}

//L.redraw(map);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    + ' | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  MAIN_ADDRESS,
  { draggable: true, icon: mainPinIcon },
  { mainPinIcon },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {

  let currentLatLng = evt.target.getLatLng();
  address.value = `lat: ${currentLatLng.lat.toFixed(5)}, lng: ${currentLatLng.lng.toFixed(5)}`
});

const renderPoints = (data) => {

  let points = [];

  //console.log(data);

  data.forEach((offer) => {

    points.push(
      {
        avatar: offer.author.avatar,
        title: offer.offer.title,
        lat: offer.location.lat,//x,
        lng: offer.location.lng,//y,
        address: offer.offer.address, // добавлен
        price: offer.offer.price,
        type: offer.offer.type,
        rooms: offer.offer.rooms,
        guests: offer.offer.guests,
        checkin: offer.offer.checkin,
        checkout: offer.offer.checkout,
        features: offer.offer.features,
        description: offer.offer.description,
        photos: offer.offer.photos,
      },
    );
  });


  const createCustomPopup = (point) => {
    const balloonTemplate = document.querySelector('#card').content.
      querySelector('.popup');
    const popupElement = balloonTemplate.cloneNode(true);

    let features = popupElement.querySelectorAll('.popup__feature');
    features.forEach((feature) => {
      feature.classList.add('hidden');
    });

    const popupPhoto
      = popupElement.querySelector('.popup__photo');
    const popupPhotos
      = popupElement.querySelector('.popup__photos');

    popupElement.querySelector('img').src = point.avatar;
    popupElement.querySelector('.popup__title').textContent = point.title;
    popupElement.querySelector('.popup__text--address').textContent = point.address;
    popupElement.querySelector('.popup__text--price').textContent = `${point.price} ₽/ночь`;
    popupElement.querySelector('.popup__type').textContent = OFFER_TYPE[point.type];
    popupElement.querySelector('.popup__text--capacity').textContent
      = `${point.rooms} комнаты для ${point.guests} гостей`;
    popupElement.querySelector('.popup__text--time').textContent
      = `Заезд после ${point.checkin}, выезд до ${point.checkout}`;
    if (point.features) {
      point.features.forEach((feature) => {
        let isExistFeature
          = popupElement.querySelector('.popup__feature--' + feature);
        isExistFeature.textContent = feature;
        isExistFeature.classList.remove('hidden');
      });
    } else {
      //console.log('point.features=undefined');
    }
    popupElement.querySelector('.popup__description').textContent = point.description;

    if (point.photos && point.photos.length > 0) {
      point.photos.forEach((photo, key) => {
        if (key > 0) {
          let newPopupPhoto = popupPhoto.cloneNode(false);
          newPopupPhoto.src = photo;
          popupPhotos.appendChild(newPopupPhoto);
        } else {
          popupPhoto.src = photo;
        }
      });
    } else {
      popupPhotos.classList.add('hidden');
    }

    return popupElement;
  };

  //const markerPanes = map.getPanes().markerPane;//.childNodes;
  if (markers.length < 1) {
    // console.log(first);
    // console.log(markers);//markerPanes);

  } else {
    // console.log(first);
    // console.log(markers);
    for(let i= 0; i < markers.length; i++) {
      //console.log('Удаляю marker['+i+']');
      map.removeLayer(markers[i]);
    }
  }

  markers = [];

  points.forEach((point) => {
    const {lat, lng} = point;

    const icon = L.icon({
      iconUrl: 'leaflet/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    // marker
    //   .addTo(map)
    //   .bindPopup(
    //     createCustomPopup(point),
    //     {
    //       keepInView: true,
    //     },
    //   );
    map.addLayer(marker);
    marker.bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );

    markers.push(marker);
    //console.log(markers);
  });
}

export { renderPoints };
