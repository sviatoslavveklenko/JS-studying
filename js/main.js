'use strict';
let money = prompt("Ваш бюджет на месяц (в грн.)?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log("Бюджет на месяц (в грн.) составляет - " + money);
console.log("Дата заполнения - " + time);

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	opitionExpences: {},
	income: [],
	savings: false,
};

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
};

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);



console.log(appData);
appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на 1 день (в грн.) составляет " + appData.moneyPerDay);

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