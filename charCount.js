// 'hello emily' => {h: 1, e: 2, l: 3, o: 1, " ": 1, …}
function charCount(str){
    if(typeof str === 'string'){
        var charMap = {};
        for(char of str.replace(/[^\w]/g, '').toLowerCase()){
            charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap
    }else return {}
}

module.exports = charCount;