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
    // if (rand) {
    //   arr.push(array[i]);
    // }
  }
  return arr.filter(el => el != null);
}

const offerType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
}

export { getRandomInt, getRandomNumber, getRandomElementArr, getRandomElementsArr, offerType };
