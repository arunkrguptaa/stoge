const isArray = require('./isArray');

//[10, [90, 80], [5, [1, [69, [61, 15]]], 19]] => [10, 90, 80, 5, 1, 69, 61, 15, 19]
function flatarr(arr){
    return (arr.some(e => isArray(e)))
        ? flatarr([].concat(...arr))
        : arr
}

module.exports = flatarr;