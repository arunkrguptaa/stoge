var isArray = require('./isArray');

// ex [1,2,3,4] => 4(3)
function binarySearch(arr, val){
    if(isArray(arr) && val){
        var first  = 0,
        last   = arr.length - 1,
        middle = Math.floor((last + first)/2);
        while(arr[middle] != val && first < last)
        {
        if (val < arr[middle]){
                last = middle - 1;
            } 
        else if (val > arr[middle]){
                first = middle + 1;
            }
            middle = Math.floor((last + first)/2);
        }
        return (arr[middle] != val) ? -1 : middle;
    } else return -1;
}

module.exports = binarySearch;