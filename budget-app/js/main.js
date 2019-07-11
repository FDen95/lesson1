"use strict";

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    incomeItem = document.querySelectorAll('.optionalexpenses-item'),
    checkSavings = document.querySelector('.choose-income'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money = 0, time;

startBtn.addEventListener('click', function() {
    do {
        money = +prompt("Ваш бюджет на месяц?", "");
    } while (isNaN(money) || money == "" || money == null);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    appData.budgetMonth = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
    
        if (typeof(a) === 'string' && typeof(a) != 'object' && a != '' &&
            typeof(b) === 'string' && typeof(b) != 'object' && b != '' && a.length < 50) {
                console.log(appData.Expenses[a]);
                appData.Expenses[a] = b;
                sum += +b;
        } else {
            i = i - 1;
        }
    }

    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

countBtn.addEventListener('click', function() {
    appData.moneyPerDay = (appData.budgetMonth / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay; 

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else {
        levelValue.textContent = "Высокий уровень достатка";
    }
});

let appData = {
    budgetMonth: money,
    timeData: time,
    Expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    chooseExpenses: function () {

    },
    detectDayBudget: function(budgetMonth) {

    }, 
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {

    }, 
    chooseIncome: function() {
        let items;
        do {
            items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        } while(typeof(items) != 'string' || items.length == 0);
        appData.income = items.split(", ");
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        let str = "Способы доп. заработка:\n";
        appData.income.forEach( function(item, i){
            str += (i + 1) + ". " + item + "\n";
        });
        alert(str);
    },
    moneyPerDay: function () {
    }
};