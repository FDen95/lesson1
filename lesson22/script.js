//'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function () {
//         console.log('Hello! ' + this.name);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log('Пользователь ' + this.name + ' ушёл');
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


////////////////////////////////////////////////////////////////////////

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);

//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();


////////////////////////////////////////////////////////////////////////

// let user = {
//     name: "Jo"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Joestar'));
// console.log(sayName.apply(user, ['Giovanna']));

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));


////////////////////////////////////////////////////////////////////////

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = "#FF0000";
    function showThis() {
        console.log(this);
    }
    showThis();
});

// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind