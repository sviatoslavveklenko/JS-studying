'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц (в грн.)?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц (в грн.)?", '');
	}
}
start();
console.log("Бюджет на месяц (в грн.) составляет - " + money);
console.log("Дата заполнения - " + time);

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется ?", '');
			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
				a != '' && b != '' && a.length < 50) {
				console.log("Done!");
				appData.expenses[a] = b;
			} else {
				alert("Не правильный формат заполнения даных. Попробуйте еще...", '');
				console.log("Error");
				i--;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ваш бюджет на 1 день (в грн.) составляет " + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay <= 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 1000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 2500) {
			console.log("Более чем средний уровень достатка");
		} else if (appData.moneyPerDay >= 2500) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Ошибка ввода даных");
		}
	},
	checkSavings: function () {
		let save = +prompt("Введите сумму ваших накоплений : "),
			percent = +prompt("Введите процент депозита : ");
		appData.monthIncome = (save / 12 / 10 * percent).toFixed();
		alert("Сумма вашего ежемесячного дохода составляет : " + appData.monthIncome);
	},
	chooseOptExpenses: function () {
		for (let i = 1; i <= 3; i++) {
			let ar = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = ar;
		}
	},
	chooseIncome: function () {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Введите ваш дополнительный доход (перечисляйте через запятую)", '');
			if ((typeof (items)) === 'string' && items != '') {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может быть еще что-то?"));
				appData.income.sort();
				appData.income.forEach(function (item, a) {
					alert("Способы доп.заработка : " + (a + 1) + ". " + item);
				})
			} else {
				i--;
			}
		}
	}
};
for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + Object.keys(appData).length);
}
console.log(appData);