//subStr('stog') => ["s", "st", "sto", "stog", "t", "to", "tog", "o", "og", "g"]
function subStr(str){
    if(typeof str === 'string'){
        var subset = [];
        for (var m = 0; m < str.length; m++){
            for (var n = m+1; n<str.length+1; n++){
                subset.push(str.slice(m,n));
            }
        }
        return subset;
    }else (str || '')
}

module.exports = subStr;