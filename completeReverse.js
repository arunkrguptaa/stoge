// ex 'abc def GHI' => 'IHG fed cba'
function completeReverse(str){
    return (typeof str === 'string')
    ? str.split(' ').reverse().map(e => e.split('').reverse().join('')).join(' ')
    : (str || '')
}

module.exports = completeReverse;