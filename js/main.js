'use strict'
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Пример использования функции: имя_функции(от, до); // Результат: целое число из диапазона "от...до"
const get_random_int = (min, max) => Math.ceil(Math.random() * (max - min) + min);

//console.log('rand=' + get_random(1, 3));
alert('rand=' + get_random_int(10, 10));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании.
// Пример использования функции:
// имя_функции(от, до, количество_знаков_после_запятой);
// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const get_random_number = (min, max, digit) => {
  let rand = Math.random() * (max - min) + min;
  return Math.round(rand * 10 ** digit) / (10 ** digit);
}

alert('rand=' + get_random_number(1, 300, 4));
