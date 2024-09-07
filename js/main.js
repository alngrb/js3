'use strict';

// первое задание
let price = prompt('Введите стоимость товара', '100');
let money = prompt('Введите количество денег', '150');

price = parseFloat(price);
money = parseFloat(money);

if (isNaN(price) || isNaN(money) || price < 0 || money < 0) {
    alert('Ошибка')
}
 else if(price==money) {
    alert('Покупка совершена')
} else if (money<price) {
    let neXvat = price - money;
    alert(`Для покупки не хватает ${neXvat} руб`)
} else if (money>price) {
    let sdacha = money - price;
    alert(`Покупка совершена. Сдача ${sdacha} руб`)
}

// второе задание
let chislo = prompt('Введите число', '1')

if (isNaN(chislo)) {
    alert('Вы ввели не число')
} else if (chislo>0) {
    alert('1')
} else if(chislo<0) {
    alert('-1')
} else if (chislo==0) {
    alert('0')
}

// трете задание
let a = prompt('Введие число', 'Число');
let b = prompt('Введие еще число', 'Число');
let res = (a+b<4) ? 'Мало' : 'Много'
alert(res)

// четвертое заание
let login4 = prompt ('Введите логин', '');
let message;
let result = (login4=='Сотрудник') ? 'Привет' : (login4=='Директор') ? 'Здравствуйте' : (login4=='') ? 'Нет логина' : '';
alert(result)

// пятое задание
let login5 = prompt('Введите логин', '');
if (login5 == 0 || login5===null) {
    alert('Отменено');
} else if (login5 !== 'Админ') {
    alert('Я вас не знаю');
} 
 else {
    let password = prompt('Введите пароль', '');
    if (password == 0 || password === null) {
        alert('Отменено');
    } else if (password !== 'Я главный') {
        alert('Неверный пароль');
    } else {
        alert('Здравствуйте!');
    }
}










