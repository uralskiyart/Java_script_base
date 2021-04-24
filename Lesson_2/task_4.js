// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

alert('Задание 4');

var a = 3;
{
    switch (a) {
        case 1:
            alert(a++);
        case 2:
            alert(a++);
            ++a;
        case 3:
            alert(a++);
        case 4:
            alert(a++);
        case 5:
            alert(a++);
        case 6:
            alert(a++);
        case 7:
            alert(a++);
        case 8:
            alert(a++);
        case 9:
            alert(a++);
        case 10:
            alert(a++);
        case 11:
            alert(a++);
        case 12:
            alert(a++);
        case 13:
            alert(a++);
        case 14:
            alert(a++);
        default:
            alert(a++)
    }
}