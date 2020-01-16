// ex 'abc def ghi' => abc_def_ghi
function pascal(str){
    return (typeof str === 'string')
    ? str.trim().split(' ').map((e,i) => capitalize(e)).join('')
    : (str || '');
}

module.exports = pascal;