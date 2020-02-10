// ex - lower => l o w e r
function spaceStr(str){
    return (typeof str === 'string') 
    ? str.split('').join(' ').trim()
    : (str || '');
}

module.exports = spaceStr;