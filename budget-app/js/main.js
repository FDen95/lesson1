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
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

//Кнопки неактивны, пока не начнём расчёт
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
checkSavings.disabled = true;
Array.from(document.getElementsByTagName('input')).forEach( function(element, i) {
    element.disabled = true;
});


let money, time;

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

startBtn.addEventListener('click', function() {
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    checkSavings.disabled = false;
    Array.from(document.getElementsByTagName('input')).forEach( function(element, i) {
        element.disabled = false;
    });
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
    if (appData.budgetMonth != undefined) {
        let expensesMonth = 0; 
        for (let i = 1; i < expensesItem.length; i += 2 ){
            expensesMonth += +expensesItem[i].value;
        }

        appData.moneyPerDay = ((appData.budgetMonth - expensesMonth) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay; 
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else {
            levelValue.textContent = "Высокий уровень достатка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    appData.income.sort();
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
        savingsCalc();
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true){
        savingsCalc();
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        savingsCalc();
    }
});

function savingsCalc() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;    
        appData.yearIncome = sum / 100 * percent; 
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
}

let appData = {
    budgetMonth: money,
    timeData: time,
    Expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};