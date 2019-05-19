"use strict";

// let budgetMonth = prompt("Ваш бюджет на месяц?");
// let dateTime = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budgetMonth: prompt("Ваш бюджет на месяц?"),
    timeData: prompt("Введите дату в формате YYYY-MM-DD"),
    expences : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдётся?");

    appData.expences[a] = b;
    console.log(appData.expences[a]);
}

alert(appData.budgetMonth / 30);