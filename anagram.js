//'rail safety','fairy tales' => true
function anagram(aStr, bStr){
    if(typeof aStr === 'string' && typeof bStr === 'string'){
        return (cleanStr(aStr) === cleanStr(bStr));
    }else return false;
}

module.exports = anagram;