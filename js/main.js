'use strict'

import { addBookingObjects } from './data.js';

// Проверка
// console.log('address=' + addDescriptions()[0].offer.address);
// console.log('features=' + addDescriptions()[0].offer.features);
// console.log('photos=' + addDescriptions()[0].offer.photos);
// console.log('desc=' + addDescriptions()[0].offer.address);
let obj = addBookingObjects()[9];
const objectArray = Object.entries(obj);
objectArray.forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});
