// ex 'abc def GHI' => 'GHI def abc'
function partialReverse(str){
    return (typeof str === 'string')
    ? str.split(' ').reverse().map(e => capitalizeUpper(e)).join(' ')
    : (str || '')
}

module.exports = partialReverse;