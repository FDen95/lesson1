"use strict";

document.getElementsByClassName('adv')[0].remove();
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

let menu = document.getElementsByClassName('menu');
let menuItem = document.getElementsByClassName('menu-item');
let menu3 = menuItem[1].cloneNode(true);
let menu4 = menuItem[3].cloneNode(true);

menu[0].replaceChild(menuItem[2], menuItem[1]);
menu[0].replaceChild(menu3, menuItem[2]);
menu[0].appendChild(menu4);
menu[0].appendChild(menuItem[3].cloneNode(true));
menuItem[4].innerHTML = "Пятый пункт";

document.title = "Мы продаем только подлинную технику Apple";

document.getElementById("prompt").innerHTML = prompt("Ваше отношение к технике Apple", "");