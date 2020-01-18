// ex Blunt => bLUNT
function dCapitalize(str){
    return (typeof str === 'string')
    ? str.charAt(0).toLowerCase()+str.slice(1).toUpperCase()
    : (str || '');
}


module.exports = dCapitalize;