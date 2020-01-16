// ex [1,2,3] => 1
function average(arr) {
    return (typeof arr === 'object')
    ? arr.reduce((t,e) => (t+e))/str.length
    : (arr || '')
}

module.exports = average;