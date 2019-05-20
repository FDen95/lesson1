"use strict";

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test',
//     bool: false
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;
// //  console.log(options);
// for (let key in options) {
//     // console.log('Свойство ' + key + ' = ' + options[key]);
// }
// // console.log(Object.keys(options));

// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function (item, i, mass) {
//     console.log(i + ": " + item + " (массив: "+ mass + ")");
// });

// let mass = [1, 3, 4, 6, 7];

// for(let key of mass){
//     console.log(key);
// }

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');

// console.log(arr);

// let arr = ["aewe", "rqer", "reqr"],
//     i = arr.join(', ');

// console.log(i);

// let arr = ["1", "4", "15"],
//     i = arr.sort(compareNum);

// function compareNum (a, b) {
//     return a - b;
// }

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// console.log(i);

function Animal(name) {
    this.name = name;
    this.canWalk = true;
}

var animal = new Animal("ёжик");

function User(name) {
    this.name = name;
    this.sayHi = function () {
        alert("Меня зовут " + this.name);
    };
}

var rin = new User("Рин");
rin.sayHi();

// function Calc() {
//     this.a;
//     this.b;

//     this.read = function () {
//         this.a = +prompt("Введите 1-е значение");
//         this.b = +prompt("Введите 2-е значение"); 
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// };

// var calculator = new Calc();
// calculator.read();

// alert("Сумма=" + calculator.sum() );
// alert("Произведение=" + calculator.mul() );

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt("Прибавьте ещё значение");
//     };
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение

// function Calculator() {
//     this.methods = {
//         '+': function (a, b) {
//             return a + b;
//         },
//         '-': function (a, b) {
//             return a - b;
//         }
//     };

//     this.calculate = function (str) {
//         let arr = str.split(" ");
//         return this.methods[arr[1]](+arr[0], +arr[2]);
//     };

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// var calc = new Calculator();

// var powerCalc = new Calculator();
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// function CoffeeMachine(power) {
//     this._power = power;
//     this._waterAmount = 0;
// }

// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

// CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//       alert( 'Кофе готов!' );
//     }, this.getTimeToBoil());
// };

// CoffeeMachine.prototype.getTimeToBoil = function () {
//     return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// };

// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//     this._waterAmount = amount;
// };
  
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();

// function Hamster() {
//     this.food = [];
// }

// //Hamster.prototype.food = []; // пустой "живот"

// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };

// // Создаём двух хомяков и кормим первого
// var speedy = new Hamster();
// var lazy = new Hamster();

// speedy.found("яблоко");
// speedy.found("орех");

// alert( speedy.food.length ); // 2
// alert( lazy.food.length ); // 2 (!??)


// function Machine(power) {
//     this._power = power; // (1)
//     this._enabled = false;
  
//     this.enable = function() {
//       this._enabled = true;
//     };
  
//     this.disable = function() {
//       this._enabled = false;
//     };
//   }

//   function CoffeeMachine(power) {
//     Machine.apply(this, arguments); // отнаследовать
  
//     var waterAmount = 0;
  
//     this.setWaterAmount = function(amount) {
//       waterAmount = amount;
//     };
//   }
  
//   var coffeeMachine = new CoffeeMachine(10000);
  
//   coffeeMachine.enable();
//   coffeeMachine.setWaterAmount(100);
//   coffeeMachine.disable();