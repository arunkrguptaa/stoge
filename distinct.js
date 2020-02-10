const isArray = require('./isArray');

//[1,2,'f',3,'c'] => {num: [1, 2, 3], str: ["f", "c"]}
function distinct(arr){
    if(isArray(arr)){
        var i=0, num=[], str=[];
        for(i; i<arr.length; i++){
            typeof arr[i] === 'number' ? num.push(arr[i]) : str.push(arr[i])
        }
        return {num,str};
    }else return arr
}

module.exports = distinct;