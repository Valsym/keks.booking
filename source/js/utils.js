const ALERT_SHOW_TIME = 5000;
const MAIN_ADDRESS = { lat: 35.6895, lng: 139.69171 }; // Tokio center

// Случайное целое число из переданного диапазона включительно.
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.round(Math.random() * (max - min) + min);
}

//  Случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomNumber = (min, max, exp, precision) => {
  let rand = Math.random() * (max - min) + min;
  let result = Math.round(rand * (10 ** exp)) / (10 ** exp);
  if (precision) {
    return rand.toFixed(precision);
  }
  return result;
}

//Случайный элемент массива
const getRandomElementArr = (array) => {
  let rnd = getRandomInt(0, array.length - 1);
  //console.log('rnd='+rnd);
  return array[rnd];
}

// Массив строк случайной длины из значений массива
const getRandomElementsArr = (array) => {
  let arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    let rand = getRandomInt(0, 3);
    arr.push(rand ? array[i] : null);
  }
  return arr.filter(el => el != null);
}
const OFFER_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
}

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content
  .querySelector('.success');
const notice = document.querySelector('main');

const showErrorAlert = (message, button) => {
  const alertContainer = errorTemplate.cloneNode(true);
  const errorMessage
    = alertContainer.querySelector('.error__message')
  const errorButton
    = alertContainer.querySelector('.error__button');

  errorMessage.textContent = message;
  errorButton.textContent = button;

  errorButton.addEventListener('click', () => {
    alertContainer.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      alertContainer.remove();
    }
  });

  document.addEventListener('click', () => {
    alertContainer.remove();
  });

  document.body.append(alertContainer);

  // setTimeout(() => {
  //   alertContainer.remove();
  // }, ALERT_SHOW_TIME);
}

const showSuccessAlert = (message) => {
  const alertContainer = successTemplate.cloneNode(true);
  const successMessage
    = alertContainer.querySelector('.success__message')

  successMessage.textContent = message;

  notice.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.display = 'block';
  alertContainer.style.position = 'fixed';//'absolute';//'relative';//
  alertContainer.style.left = '100px';
  alertContainer.style.top = '10px';
  alertContainer.style.width = '300px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.innerHTML = message;

  document.body.append(alertContainer);

  alertContainer.addEventListener('click', () => {
    alertContainer.remove();
  });
}
const debounce = (cb, delay) => {
  // Задержка реализуется с помощью setTimeout
  // Если вызов произошёл до окончания задержки, таймер начинает отсчёт заново
  let lastTimeout = null;
  return function(...args) {
    if(lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args)
    }, delay);
  }
};

export { getRandomInt, getRandomNumber, getRandomElementArr, getRandomElementsArr, OFFER_TYPE,
  showErrorAlert, showSuccessAlert, showAlert, MAIN_ADDRESS, debounce };
