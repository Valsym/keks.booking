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
  'Комфортабельный отель для семей с детьми',
  'Замечательное жилье для наших любимых гостей',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
];

const photos = [
  '../img/hotels/hotel1.jpg',
  '../img/hotels/hotel2.jpg',
  '../img/hotels/hotel3.jpg',
  // 'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  // 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  // 'http://o0.github.io/assets/images/tokyo/hotel13.jpg',
];

const title = [
  'Отель в центре Токио',
  'Отель семейный',
  'Апартаменты у парка',
  'Апартаменты в центре Токио',
  'Уютное гнездышко для молодоженов',
];

const createBookingObject = () => {
  let location = {
    x: getRandomNumber(35.65000, 35.70000, 0, 5),
    y: getRandomNumber(139.70000, 139.80000, 0, 5),
  };

  return {
    author: {
      avatar: '../img/avatars/user0' + getRandomInt(1, 8) + '.png',
    },
    offer: {
      title: getRandomElementArr(title),
      address: `${location.x}, ${location.y}`,
      price: Math.floor(getRandomInt(1000, 100000) / 100) * 100,
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
