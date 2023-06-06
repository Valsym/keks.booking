import { Offer_Type } from './utils.js';

const MAX_PRICE = 1000000;
const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector('.ad-form');
const type = form.querySelector('#type');
const typeOptions = type.children;
const price = form.querySelector('#price');

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const timeOutOptions = timeOut.children;

const roomNumber = form.querySelector('#room_number');
const roomNumberOptions = roomNumber.children;
const capacity = form.querySelector('#capacity');
const capacityOptions = capacity.children;

type.addEventListener('change',  (evt) => {
  const selectedType = evt.target.value;
  const priceValue = price.value;
  //console.log("Changed to: " + selectedType);
  price.placeholder = MIN_PRICE[selectedType];

  if (priceValue === '') {
    return; // Чтобы подавить сообщение о незаполненном поле в момент выбора Типа жилья
  }

  if (priceValue < MIN_PRICE[selectedType]) {
    price.setCustomValidity(`Цена за ночь за ${Offer_Type[selectedType]} не менее ${MIN_PRICE[selectedType]}  руб.`);
  }  else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

const optionSelected = (options) => {
  for (let opt of options) {
    if (opt.selected === true) {
      return opt.value;
    }
  }
  alert('Что-то не то (см. вывод options в Консоль).')
  console.log(options);
}

timeIn.addEventListener('change',  (evt) => {
  const selectedTimeIn = evt.target.value;

  for ( let opt of timeOutOptions){
    opt.selected = false;
  }

  switch (selectedTimeIn) {
    case '12:00':
      timeOutOptions[0].selected = true;
      break;
    case '13:00':
      timeOutOptions[1].selected = true;
      break;
    case '14:00':
      timeOutOptions[2].selected = true;
      break;
  }
});

form.addEventListener('submit', (evt) => {
  const priceValue = price.value;
  const typeOptionSelected = optionSelected(typeOptions);

  if (priceValue < MIN_PRICE[typeOptionSelected]) {
    price.setCustomValidity(`Цена за ночь за ${Offer_Type[typeOptionSelected]} не менее ${MIN_PRICE[typeOptionSelected]} руб.`);
    evt.preventDefault();
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

price.addEventListener('input', () => {
  const priceValue = price.value;
  const typeOptionSelected = optionSelected(typeOptions);

  if (priceValue > MAX_PRICE) {
    price.setCustomValidity(`Цена за ночь не более ${MAX_PRICE} руб.`);
  } else if (priceValue < MIN_PRICE[typeOptionSelected]) {
    price.setCustomValidity(`Цена за ночь за ${Offer_Type[typeOptionSelected]} не менее ${MIN_PRICE[typeOptionSelected]} руб.`);
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

roomNumber.addEventListener('change',  (evt) => {
  const selectedRoomNumber = evt.target.value;

  for (let option of capacityOptions) {
    option.selected = false;
  }

  switch (selectedRoomNumber) {
    case '1': // 1 комната
      capacity[2].selected = true; // для 1 гостя
      break;
    case '2': // 2 комнаты
      capacity[1].selected = true; //для 2 гостей
      break;
    case '3': // 3 комнаты
      capacity[0].selected = true; //для 3 гостей
      break;
    case '100': // 100 комнат
      capacity[3].selected = true; // не для гостей
      break;
  }
});

capacity.addEventListener('change',  (evt) => {
  const selectedCapacity = evt.target.value;
  const roomNumberSelected = optionSelected(roomNumberOptions);

  switch (selectedCapacity) {
    case '0': // не для гостей
      if (roomNumberSelected !== '100') {
        capacity.setCustomValidity('Не для гостей можно выбрать только 100 комнат.');
      } else {
        capacity.setCustomValidity('');
      }
      break;
    case '1': // для 1 гостя
      if (roomNumberSelected !== '1') {
        capacity.setCustomValidity('Выберите для 1 гостя жилье с 1 комнатой');
      } else {
        capacity.setCustomValidity('');
      }
      break;
    case '2': // для 2 гостей
      if (roomNumberSelected !== '2' && roomNumberSelected !== '3') {
        capacity.setCustomValidity('Выберите для 2 гостей жилье с 2 или 3 комнатами');
      } else {
        capacity.setCustomValidity('');
      }
      break;
    case '3': // для 3 гостей
      if (roomNumberSelected !== '3') {
        capacity.setCustomValidity('Выберите для 3 гостей жилье с 3 комнатами');
      } else {
        capacity.setCustomValidity('');
      }
      break;
  }
  capacity.reportValidity();
});

