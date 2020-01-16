// ex 'abc def ghi' => abc_def_ghi
function kebab(str){
    return (typeof str === 'string')
    ? str.trim().split(' ').join('-')
    : (str || '');
}

module.exports = kebab;