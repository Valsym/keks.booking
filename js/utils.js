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
const getRandomNumber = (min, max, digit) => {
  let rand = Math.random() * (max - min) + min;
  return Math.round(rand * 10 ** digit) / (10 ** digit);
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

export { getRandomInt, getRandomNumber, getRandomElementArr, getRandomElementsArr };
