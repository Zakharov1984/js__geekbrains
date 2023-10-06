"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.  
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

let positive = +prompt('Пожалуйста, введите положительное число'),
    negative = +prompt('Пожалуйста, введите отрицательное число');

if (positive < 0 || isNaN(positive) || negative > 0 || isNaN(negative)) {
  console.log("Одно или более значений некорректно.");
}else {
  console.log("Все значения верные.");
}
