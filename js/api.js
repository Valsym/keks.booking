
//const
const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,

    },
  )
    .then((response) => {
      if(response.ok ) {
        onSuccess();
        //alert('11111!');
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
        console.log(response);
        console.log(body);
      }
    })
    .catch((err) => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      alert('cath!');
      console.log(err);
    });
}

export { getData, sendData }
