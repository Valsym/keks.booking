'use strict'
//import { addBookingObjects } from './data.js';
import {getData} from './api.js';
import {showErrorAlert, showSuccessAlert, showAlert} from './utils.js';
import {renderPoints} from './map.js';
import {setHousingTypeOption, filterData} from './filter.js';

const OFFERS_NUMBER = 10;

const onSuccess = (data) => {
  //showSuccessAlert('Данные с сервера загружены успешно!')

  //Проверка
  // console.log(data);
  // const objectArray = Object.entries(obj[0]);
  // objectArray.forEach(([key, value]) => {
  //   console.log(key);
  //   console.log(value);
  // });
  renderPoints(data.slice(0, OFFERS_NUMBER));
  setHousingTypeOption(() => renderPoints(filterData(data)));
  //setHousingTypeOption(()=>data ,() => renderPoints(data));
  //renderPoints(filterData(data));//.slice(0, OFFERS_NUMBER));
  //filterData(() => renderPoints(data));
}

const onError = (err) => {
  //showErrorAlert('Ошибка загрузки. Попробуйте еще раз', 'Закрыть');
  showAlert('Ошибка загрузки.<br> Попробуйте еще раз.<br>Кликните здесь, чтобы закрыть.');
  console.log('Ошибка загрузки.<br> Попробуйте еще раз');
  console.log(err);
}


getData(onSuccess, onError);



//Проверка
// console.log('address=' + addDescriptions()[0].offer.address);
// console.log('features=' + addDescriptions()[0].offer.features);
// console.log('photos=' + addDescriptions()[0].offer.photos);
// console.log('desc=' + addDescriptions()[0].offer.address);

//let obj = addBookingObjects()[0];
// const objectArray = Object.entries(obj);
//
//
// objectArray.forEach(([key, value]) => {
//   console.log(key);
//   console.log(value);
// });
