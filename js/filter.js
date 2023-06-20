const OFFERS_NUMBER = 10;

const formMapFilters = document.querySelector('.map__filters');
const housingType = formMapFilters.querySelector('#housing-type');
const housingTypeOptions = housingType.children;

const optionSelected = (options) => {
  for (let opt of options) {
    if (opt.selected === true) {
      return opt.value;
    }
  }
  alert('Что-то не то (см. вывод options в Консоль).')
  console.log(options);
}
const setHousingTypeOption = (cb) => {
  housingType.addEventListener('change', () => cb());
}

const filterData = (data) => {

  const housingTypeOptionSelected = optionSelected(housingTypeOptions)
  //console.log(housingTypeOptionSelected);
  const res = data.slice().filter(item => item.offer.type === (housingTypeOptionSelected || 'any'));
  //console.log(res);

  return res.slice(0, OFFERS_NUMBER);
}

export { setHousingTypeOption, filterData }
