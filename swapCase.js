var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
LOWER = 'abcdefghijklmnopqrstuvwxyz';

// ex  ADcfRD1231 => adCFrd1231
function swapCase(str){
    if(typeof str === 'string'){
        return str.split('').map(
            e => (UPPER.indexOf(e)!==-1) 
            ? e.toLowerCase() 
            : (LOWER.indexOf(e) !== -1) 
            ? e.toUpperCase() 
            : e
        ).join('')
    }else (str || '')
}

module.exports = swapCase;