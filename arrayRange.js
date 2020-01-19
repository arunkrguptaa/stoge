// arrayRange(6, 4) => [6,7,8,9]
function arrayRange(s, l){
    if(l === undefined){
        l=s;
        s=0;
    }
    if(typeof s === 'number' && typeof l === 'number'){
        var arr = new Array(l), i = 0;
        for(i; i < l; i++, s++){
            arr[i] = s;
        }
        return arr;
    }else return []
}

module.exports = arrayRange;