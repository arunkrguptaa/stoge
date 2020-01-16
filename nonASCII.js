// ex 'äÄçÇéÉêabcdöÖÐþúÚ' => abc
function nonASCII(str){
    return (typeof str === 'string') 
    ? str.replace(/[^\x20-\x7E]/g, '')
    : (str || '');
}

module.exports = nonASCII;