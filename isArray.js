// ex [1,2,3] => true
function isArray(arr) {
    return (toString.call(arr) === '[object Array]') ? true : false
}

module.exports = isArray;