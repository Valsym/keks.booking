'use strict'

//import { addBookingObjects } from './data.js';
import {getData} from './api.js';
import {showAlert, debounce} from './utils.js';
import {renderPoints} from './map.js';
import {setHousingTypeOption, filterData, setHousingPriceOption, setHousingRoomsOption,
  setHousingGuestsOption, setHousingFeaturesOptions} from './filter.js';

const OFFERS_NUMBER = 10;
const RERENDER_DELAY = 500;

const onSuccess = (data) => {
  //showSuccessAlert('Данные с сервера загружены успешно!')
  renderPoints(data.slice(0, OFFERS_NUMBER));
  setHousingTypeOption(() => renderPoints(filterData(data)));
  setHousingPriceOption(() => renderPoints(filterData(data)));
  setHousingRoomsOption(() => renderPoints(filterData(data)));
  setHousingGuestsOption(() => renderPoints(filterData(data)));
  //setHousingFeaturesOptions(() => renderPoints(filterData(data)));
  setHousingFeaturesOptions(debounce(
    () => renderPoints(filterData(data)),
    RERENDER_DELAY,
  ));
}

const onError = () => {
  //showErrorAlert('Ошибка загрузки. Попробуйте еще раз', 'Закрыть');
  showAlert('Ошибка загрузки.<br> Попробуйте еще раз.<br>Кликните здесь, чтобы закрыть.');
  // console.log('Ошибка загрузки.<br> Попробуйте еще раз');
  // console.log(err);
}

getData(onSuccess, onError);

