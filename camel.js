// ex 'abc def ghi' => abcDefGhi
function camel(str){
    return (typeof str === 'string')
    ? str.trim().split(' ').map((e,i) => (i!==0) ? capitalize(e) : e).join('')
    : (str || '');
}

module.exports = camel;