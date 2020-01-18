// ex stoge.join([1,2,3], '|') => '1|2|3'
function removeFalsy(arr) {
    return typeof (toString.call(arr) === '[object Array]')
    ? arr.filter(Boolean)
    : (arr || '')
}

module.exports = removeFalsy;