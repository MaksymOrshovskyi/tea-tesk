// Функція для додавання двох чисел
function add(num1, num2) {
    return num1 + num2;
}

// Функція для віднімання двох чисел
function subtract(num1, num2) {
    return num1 - num2;
}

// Функція для множення двох чисел
function multiply(num1, num2) {
    return num1 * num2;
}

// Функція для ділення двох чисел
function divide(num1, num2) {
    if (num2 === 0) {
        return "На нуль ділити не можна!";
    } else {
        return num1 / num2;
    }
}

// Приклади використання

console.log("Додавання: " + add(5, 3));
console.log("Віднімання: " + subtract(5, 3));
console.log("Множення: " + multiply(5, 3));
console.log("Ділення: " + divide(6, 3));
