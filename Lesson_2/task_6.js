// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

alert('Задание 6');

// import * as mathFuncs from './task_5.js';

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'mul':
            return mul(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}

{
    alert(mathOperation(2, 2, 'sum'));
    alert(mathOperation(2, 2, 'sub'));
    alert(mathOperation(2, 2, 'mul'));
    alert(mathOperation(2, 2, 'div'));
}
