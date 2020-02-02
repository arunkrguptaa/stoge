//[1,2,3] => [[1,2],[3]]
function chunk(arr, num){
    if(isArray(arr)){
        var newarr = [], i=0;
        while(i<arr.length){
            newarr.push(arr.slice(i, i+num));
            i += num;
        }
        return newarr;
    } else return []
}

module.exports = chunk;