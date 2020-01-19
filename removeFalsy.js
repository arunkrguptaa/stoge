
var isArray = require('./isArray');

// ex stoge.removeFalsy([1,'',2,false,3]) => [1,2,3]
function removeFalsy(arr) {
    return (isArray(arr))
    ? arr.filter(Boolean)
    : (arr || '')
}

module.exports = removeFalsy;