// Розділяйте кожний пункт домашнього в коді коментарями.

//1. Створіть функцію для обчислення факторіалу числа.
//   Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
//   і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.
console.log('1. Створіть функцію для обчислення факторіалу числа.');

let num1 = Number(prompt('Введіть число для обчислення його факторіалу:'))
const calculateFactorial = n => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(`факторіл числа ${num1} = ${calculateFactorial(num1)}`);

//2. Підрахунок кількості слів у рядку.
//   Створіть функцію countSymb(sym), яка приймає рядок через prompt
//   і виводить в консоль кількість букв у цьому рядку.
//   Використовуйте умови та цикли для підрахунку букв.
//   ** Підказка стрічку також можна ітерувати, використваши .length
console.log('2. Підрахунок кількості слів у рядку.');

let leng = prompt('Введіть текст для підрахунку букв');
function countSymb(sym) {

    let CalcSym = 0

    for (let i = 0; i < sym.length; i++) {
        if (
            sym[i] !== ' ' && sym[i] !== '.' && sym[i] !== ',' &&
            sym[i] !== ';' && sym[i] !== ':' && sym[i] !== '!' &&
            sym[i] !== '?' && sym[i] !== '>' && sym[i] !== '<') {
            CalcSym++
        }
    }
    return CalcSym
}
console.log(`У вашому рядку: ${leng}, кількість букв :${countSymb(leng)} `)


//3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
//   Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
//   якщо число є простим, і false, якщо не є.
//   ** Просте число це 3, 56, 23
//      Не просте це 1.33, 4.1, 55.222
console.log('3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).');

function isPrime(number) {
    if (number % 1 === 0) {
        console.log(`число ${number} є простим`)
        return true
    } else {
        console.log(`число ${number} не є простим`)
        return false
    }
}
console.log(isPrime(Number(prompt('введіть число'))));


//4. Запит на пароль.
//   Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
//   Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.
console.log('4. Запит на пароль.');

function passwordPrompt(pas1, pas2) {

    pas1 = prompt('введіть пароль')
    pas2 = prompt('Повторіть пароль')

    if (pas1 === null || pas1 === "" || pas2 === null || pas2 === "") {
        console.log("Рядок пустий");
    } else if (pas1 === pas2) {
        console.log('Успіх')
    } else if (pas1 != pas2) {
        console.log('Невдача')
    }

}
passwordPrompt()


//5. Факторіал чисел в діапазоні.
//   Створіть функцію factorialRange(num1, num2, num3),
//   яка приймає 2 числа.
//   Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести

console.log('5. Факторіал чисел в діапазоні.');

function factorialRange(num1, num2, num3) {

    let res = {}

    for (let i = num1; i <= num2; i++) {
        res[i] = num3(i);
    }
    for (let i in res) {
        console.log(`факторіал числа ${i} = ${res[i]}`);
    }

    return res

}
// третій параметр задав як параметр для налаштування дій: будь то обчислення факторіалу, будь то інші методи роботи з числами
factorialRange(Number(prompt("Введіть початок діапазону факторіала: ")),
    Number(prompt("Вкажіть кінець діапазону файкторіалу: ")),
    calculateFactorial)


//6. Калькурятор.
//   Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//   та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//   Результат повернути (return) і вивести 
console.log('6. Калькурятор.');

function calc(num1, num2, action) {
    let res

    if (num1 === null || num1 === "" || num2 === null || num2 === "" || action === null || action === "") {
        console.log("Рядок пустий");
    } else if (action == "+") {
        res = num1 + num2
    } else if (action == "-") {
        res = num1 - num2
    } else if (action == "/") {
        res = num1 / num2
    } else if (action == "*") {
        res = num1 * num2
    }
    console.log(res);
    return res
}

calc(Number(prompt("Введіть перше число: ")),
    Number(prompt("Введіть друге число: ")),
    (prompt("Вкажіть бажану дію:\nМожливі наступні дії: (+, -, /, *)")))
