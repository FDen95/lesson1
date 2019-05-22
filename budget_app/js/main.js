"use strict";

let money, time;

// Элементы страницы
let startButton = document.getElementById("start");
let budgetValue = document.querySelector(".budget-value");
let daybudgetValue = document.querySelector(".daybudget-value");
let levelValue = document.querySelector(".level-value");
let expensesValue = document.querySelector(".expenses-value");
let optionalexpensesValue = document.querySelector(".optionalexpenses-value");
let incomeValue = document.querySelector(".income-value");
let monthsavingsValue = document.querySelector(".monthsavings-value");
let yearsavingsValue = document.querySelector(".yearsavings-value");
let expences = document.getElementsByClassName("expenses-item");
let expensesButton = document.getElementById("expenses-item-btn");
let countBudgetButton = document.getElementById("count-budget-btn");
let optionalExpenses = document.querySelectorAll("optionalexpenses-item");


function start() {
    do {
        money = +prompt("Ваш бюджет на месяц?", "");
    } while (isNaN(money) || money == "" || money == null);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

// start();

let appData = {
    budgetMonth: money,
    timeData: time,
    expences : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    chooseExpences: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько обойдётся?");
        
            if (typeof(a) === 'string' && typeof(a) != 'object' && a != '' &&
                typeof(b) === 'string' && typeof(b) != 'object' && b != '' && a.length < 50) {
                    appData.expences[a] = b;
                    console.log(appData.expences[a]);
            }
        }
    },
    detectDayBudget: function(budgetMonth) {
        return (budgetMonth / 30);
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
        let a;
        for (let i = 0; i < 3; i++) {
            do {
                a = prompt("Статья необязательных расходов?");
            } while (!(typeof (a) === 'string' && typeof (a) != 'object' && a != ''));
    
            appData.optionalExpenses[i] = a;
        }
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
        appData.moneyPerDay = (appData.detectDayBudget(appData.budgetMonth)).toFixed(1);

        if (appData.moneyPerDay < 100) {
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else {
            alert("Высокий уровень достатка");
        }
    }
};

// for (let i in appData) {
//     console.log(i + ": " + appData[i]);
// };