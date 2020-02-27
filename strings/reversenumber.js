function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseNumber(1234))
console.log(reverseNumber(-5000))