'use strict';
let money = prompt("Ваш бюджет на месяц?"),
	time = prompt("Введите дату в формате YYYY-MM-DD");
console.log("Бюджет на месяц составляет - " + money);
console.log("Дата заполнения - " + time);
let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	opitionExpences: {},
	income: [],
	savings: false,
};
let question_1 = prompt("Введите обязательную статью расходов в этом месяце"),
	question_2 = prompt("Во сколько обойдется ?"),
	question_3 = prompt("Введите обязательную статью расходов в этом месяце"),
	question_4 = prompt("Во сколько обойдется ?");
appData.expenses.question_1 = question_2;
appData.expenses.question_3 = question_4;


console.log(appData);
let moneyPerDay = money / 30;
alert("Ваш бюджет на 1 день = " + moneyPerDay);