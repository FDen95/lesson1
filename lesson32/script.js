let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел');

    let promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    });

    return promise;
}

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function lose() {
    console.log('Вы проиграли...');
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

shoot({})
        .then(mark => console.log('Вы попали в цель!'));
