// ex  'a,b\nc,d' => [[a,b], [c,d]]
function csvToArray(str, deli = ',', omitHeader = false){
    return (typeof str === 'string')
    ? str.slice(omitHeader ? str.indexOf('\n') + 1 : 0).split('\n').map(e => e.split(deli))
    : (str || '')
}

module.exports = csvToArray;