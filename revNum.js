// -1345 => -5431
function revNum(num) {
    return (typeof num === 'number')
    ? parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
    : -1
}

module.exports = revNum;