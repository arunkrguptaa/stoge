//hello => 2
function vowels(str){
    if(typeof str === 'string'){
        var matches = str.match(/[aeiou]/gi);
        return matches ? matches.length : 0;
    }else return false;
}

module.exports = vowels;