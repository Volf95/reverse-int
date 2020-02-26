module.exports = function reverse (n) {
    let positiveNumber = Math.abs(n);
    let result = positiveNumber.toString().split('').reverse().join('');
    return Number(result);
}
