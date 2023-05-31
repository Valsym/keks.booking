const form = document.querySelector('.ad-form');
const type = form.querySelector('#type');
const price = form.querySelector('#price');

const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const timeoutOptions = timeout.children;

const selectTypeHandler = () => {
  type.addEventListener('change',  (evt) => {
    let selectedType = evt.target.value;
    //console.log("Changed to: " + selectedType);
    switch (selectedType) {
      case 'flat':
        timeout.placeholder = 5000;
        break;
      case 'bungalow':
        price.placeholder = 1000;
        break;
      case 'house':
        price.placeholder = 10000;
        break;
      case 'palace':
        price.placeholder = 50000;
        break;
      default:
        price.placeholder = 5000;
    }
  });
}

const selectTimeInHandler = () => {
  timein.addEventListener('change',  (evt) => {
    let selectedTimein = evt.target.value;
    //console.log("Changed to: " + selectedTimein);
    switch (selectedTimein) {
      case '12:00':
        timeoutOptions[0].selected = true;
        timeoutOptions[1].selected = false;
        timeoutOptions[2].selected = false;
        break;
      case '13:00':
        timeoutOptions[0].selected = false;
        timeoutOptions[1].selected = true;
        timeoutOptions[2].selected = false;
        break;
      case '14:00':
        timeoutOptions[0].selected = false;
        timeoutOptions[1].selected = false;
        timeoutOptions[2].selected = true;
        break;
    }
  });
}

selectTypeHandler();
selectTimeInHandler();

//export { selectTypeHandler, selectTimeInHandler };

