'use strict';

function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const length = 40;

for (let ii = 0; ii <= 40; ++ii) {
    console.log(fib(ii));
}