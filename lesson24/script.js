let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет`);

function makeArray () {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[4]();
arr[8]();