// ex BLUNT => Blunt
function capitalize(str){
    return (typeof str === 'string')
    ? str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
    : (str || '');
}

module.exports = capitalize;