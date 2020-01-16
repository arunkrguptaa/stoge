// ex 'abc def ghi' => abc_def_ghi
function snake(str){
    return (typeof str === 'string')
    ? str.trim().split(' ').join('_')
    : (str || '');
}

module.exports = snake;