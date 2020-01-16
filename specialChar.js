// ex xyz@$#(),;!$%^&*+-_.+=abc => @$#(),;!$%^&*+-_.=+
function specialChar(str){
    return (typeof str === 'string') 
    ? str.replace(/[a-zA-Z0-9 ]/g,'')
    : (str || '');
}

module.exports = specialChar;