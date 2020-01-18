// ex [1,2,3] => 1
function average(arr) {
    return (toString.call(arr) === '[object Array]')
    ? arr.reduce((t,e) => (t+e))/arr.length
    : (arr || '')
}

module.exports = average;