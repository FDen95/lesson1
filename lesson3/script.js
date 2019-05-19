"use strict";

let money, time;

function start() {
    do {
        money = +prompt("Ваш бюджет на месяц?", "");
    } while (isNaN(money) || money == "" || money == null);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

start();

let appData = {
    budgetMonth: money,
    timeData: time,
    expences : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

function chooseExpences () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдётся?");
    
        if (typeof(a) === 'string' && typeof(a) != 'object' && a != '' &&
            typeof(b) === 'string' && typeof(b) != 'object' && b != '' && a.length < 50) {
                appData.expences[a] = b;
                console.log(appData.expences[a]);
        }
    }
}

chooseExpences();

appData.moneyPerDay = (detectDayBudget(appData.budgetMonth)).toFixed(1);

if (appData.moneyPerDay < 100) {
    alert("Минимальный уровень достатка");
} else if (appData.moneyPerDay < 2000) {
    alert("Средний уровень достатка");
} else {
    alert("Высокий уровень достатка");
}

function detectDayBudget(budgetMonth){
    return (budgetMonth / 30);
}

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses () {
    let a;
    for (let i = 0; i < 3; i++) {
        do {
            a = prompt("Статья необязательных расходов?");
        } while (!(typeof (a) === 'string' && typeof (a) != 'object' && a != ''));

        appData.optionalExpenses[i] = a;
    }
}
chooseOptExpenses();