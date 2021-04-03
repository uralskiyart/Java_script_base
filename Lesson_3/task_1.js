// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// проверка числа на простое
function primeCheck(num) {
    for (let i = 2; i <= Math.floor((current ** 0.5) + 1); i++) {
        if (current % i === 0) return false;
    }
    return true;
}

function primesFinder(last_num) {
    let primes_arr = [2];
    current = 2;

    while (current <= last_num) {
        if (primeCheck(current) == true) primes_arr.push(current);
        current++;
    }
    return primes_arr;
}

console.log(primesFinder(100));
