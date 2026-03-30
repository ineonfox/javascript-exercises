const fibonacci = function(num) {
    let prev = 1;
    let current = 1;
    let number = Number(num);
    if (number === 0) {
        return 0;
    }
    if (number < 0) {
        return 'OOPS';
    }
    for (let i = 3; i <= number; i++) {
        [prev, current] = [current, prev + current];
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
