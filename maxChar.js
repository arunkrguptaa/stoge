const charCount = require('./charCount');

// 'hello emily' => {h: 1, e: 2, l: 3, o: 1, " ": 1, …}
function maxChar(str){
    var charMp = charCount(str),
    max = 0,
    max_char = '';
    for(char in charMp){
        if(charMp[char]>max){
            max = charMp[char];
            max_char = char;
        }
   }
   return {'char': max_char, 'count': max}
}

module.exports = maxChar;