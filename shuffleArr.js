var isArray = require('./isArray');

// ex [1,2,3,4] => [4,1,3,2]
function shuffleArr(arr){
    if(isArray(arr)){
        var ctr = arr.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        return arr;
    } else return arr;
}

module.exports = shuffleArr;