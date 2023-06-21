import { optionSelected } from './utils.js';

const OFFERS_NUMBER = 10;

const formMapFilters = document.querySelector('.map__filters');
const housingType = formMapFilters.querySelector('#housing-type');
const housingTypeOptions = housingType.children;
const housingPrice = formMapFilters.querySelector('#housing-price');
const housingPriceOptions = housingPrice.children;
const housingRooms = formMapFilters.querySelector('#housing-rooms');
const housingRoomOptions = housingRooms.children;
const housingGuests = formMapFilters.querySelector('#housing-guests');
const housingGuestsOptions = housingGuests.children;
const housingFeatures = formMapFilters.querySelector('#housing-features');
const housingFeaturesOptions= formMapFilters.querySelectorAll('[name="features"]');
const featuresChecked = (items) => {
  const features = [];
  for (let item of items) {
    if (item.checked === true) {
      features.push(item.value);
    }
  }
  return features;
}
const setHousingTypeOption = (cb) => {
  housingType.addEventListener('change', () => cb());
}
const setHousingPriceOption = (cb) => {
  housingPrice.addEventListener('change', () => cb());
}
const setHousingRoomsOption = (cb) => {
  housingRooms.addEventListener('change', () => cb());
}
const setHousingGuestsOption = (cb) => {
  housingGuests.addEventListener('change', () => cb());
}
const setHousingFeaturesOptions = (cb) => {
  housingFeatures.addEventListener('change', () => cb());
}

const filterData = (data) => {

  const housingTypeOptionSelected = optionSelected(housingTypeOptions);
  const housingPriceOptionsSelected = optionSelected(housingPriceOptions);
  const housingRoomOptionsSelected = optionSelected(housingRoomOptions);
  const housingGuestsOptionstionSelected = optionSelected(housingGuestsOptions);

  let res = data.slice();
  //console.log(res);
  if (housingTypeOptionSelected !== 'any') {
    res = res.slice().filter(item => item.offer.type === (housingTypeOptionSelected));
  }

  if (housingPriceOptionsSelected !== 'any') {
    res = res.slice().filter((item) => {
      const price = item.offer.price;
      if ((price < 10000 && housingPriceOptionsSelected === 'low') ||
        (price >= 10000 && price <= 50000 && housingPriceOptionsSelected === 'middle') ||
        (price > 50000 && housingPriceOptionsSelected === 'high')) {
        return item;
      }
    });
  }

  if (housingRoomOptionsSelected !== 'any') {
    res = res.slice().filter(item => item.offer.rooms === Number(housingRoomOptionsSelected));
  }

  if (housingGuestsOptionstionSelected !== 'any') {
    res = res.slice().filter(item => item.offer.guests === Number(housingGuestsOptionstionSelected));
  }

  const featuresCheckedArray = featuresChecked(housingFeaturesOptions);
  if (featuresCheckedArray) {
    featuresCheckedArray.forEach((feature) => {
      res = res.slice().filter(item => item.offer.features && item.offer.features.includes(feature));
    });
  }

  return res.slice(0, OFFERS_NUMBER);
}

export { setHousingTypeOption, filterData, setHousingPriceOption, setHousingRoomsOption,
  setHousingGuestsOption, setHousingFeaturesOptions}
