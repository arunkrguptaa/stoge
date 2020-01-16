// ex - lower => l o w e r
function distinct(str){
    return (typeof str === 'string') 
    ? str.split('').join(' ').trim()
    : (str || '');
}

module.exports = distinct;