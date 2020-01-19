var isArray = require('./isArray');

// [1,2,3]+[4,5] => [5,7,3]
function arraySum(arr1, arr2){
    if(arr1 && arr2 === undefined){
        return arr1;
    }
    else if(isArray(arr1) && isArray(arr2)){
        var i=0,len1= arr1.length,
        len2= arr2.length,
        maxLen = len1<len2 ? len2 : len1, final=[];
        for(i;i<maxLen;i++){
            final.push(
                ((arr1[i]) ? arr1[i] : ((typeof arr2[i] === 'number') ? 0 : '')) + 
                ((arr2[i]) ? arr2[i] : ((typeof arr1[i] === 'number') ? 0 : ''))
            )
        }
        return final;
    }
    else return [];
}

module.exports = arraySum;