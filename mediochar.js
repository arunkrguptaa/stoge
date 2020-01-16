// ex xyz@$#(),;!$%^&*+-_.+=abc => xyzabc
function mediochar(str){
    return (typeof str === 'string') 
    ? str.replace(/[^a-zA-Z0-9 ]/g,'')
    : (str || '');
}

module.exports = mediochar;