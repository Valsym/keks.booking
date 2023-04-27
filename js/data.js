import { getRandomInt, getRandomNumber, getRandomElementArr, getRandomElementsArr } from './utils.js';

const numberOfObject = 10;
const offerType = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const checkin = [
  '12:00',
  '13:00',
  '14:00',
]

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const checkout = checkin;

const description = [
  'Очень дружественное помещение для проживания гостей',
  'Замечательное жилье для наших любимых гостей',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel13.jpg',
];

const title = [
  'Отель1',
  'Hotel2',
  'Appartment1',
  'Appartment2',
  'Motel1',
];

const createBookingObject = () => {
  let location = {
    x: getRandomNumber(35.65000, 35.70000, 5),
    y: getRandomNumber(139.70000, 139.80000, 5),
  };

  return {
    author: {
      avatar: 'img/avatars/user' + getRandomInt(1, 10) + '.png',
    },
    offer: {
      title: getRandomElementArr(title),
      address: `${location.x}, ${location.y}`,
      price: getRandomInt(1000, 100000),
      type: getRandomElementArr(offerType),
      rooms: getRandomInt(0, 10),
      guests: getRandomInt(0, 10),
      checkin: getRandomElementArr(checkin),
      checkout: getRandomElementArr(checkout),
      features: getRandomElementsArr(features),
      description: getRandomElementArr(description),
      photos: getRandomElementsArr(photos),
    },
    location: {
      x: location.x,
      y: location.y,
    },
  }
}

const addBookingObjects = () => {
  let bookingObjectsArr = [];
  for (let i = 0; i < numberOfObject; i++) {
    bookingObjectsArr.push(createBookingObject());
  }
  return bookingObjectsArr;
}

export { addBookingObjects };
