// 'Hello There' => "eeehhllort"
function cleanStr(str){
    if(typeof str === 'string'){
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }
}

module.exports = cleanStr;