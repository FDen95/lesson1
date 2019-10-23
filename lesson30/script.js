// let options = {
//     width: 1280,
//     height: 720,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let req = new XMLHttpRequest();

    //req.open(method, url, async, login, pass);
    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    req.send();

    //status
    //statusText
    //responseText / response
    //readyState

    req.addEventListener('readystatechange', function() {
        if (req.readyState === 4 && req.status == 200) {
            let data = JSON.parse(req.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Произошла ошибка';
        }
    });
});


inputUsd.addEventListener('input', () => {
    let req = new XMLHttpRequest();

    //req.open(method, url, async, login, pass);
    req.open('GET', 'current.json');
    req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    req.send();

    //status
    //statusText
    //responseText / response
    //readyState

    req.addEventListener('readystatechange', function() {
        if (req.readyState === 4 && req.status == 200) {
            let data = JSON.parse(req.response);
            inputRub.value = inputUsd.value * data.usd;
        } else {
            inputRub.value = 'Произошла ошибка';
        }
    });
});
