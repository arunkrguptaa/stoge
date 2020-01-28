//[9,4,6,2,8,1] => [1,2,4,6,8,9] 
function quickSort(arr) {
    if (isArray(arr) && arr.length > 1) {
        var left = [], right = [], newArray = [],
        pivot = arr.pop();
        for (var i = 0; i < arr.length; i++) {
            (arr[i] <= pivot) ? left.push(arr[i]) : right.push(arr[i]);
        }    
        return newArray.concat(quickSort(left), pivot, quickSort(right));
    } else return arr;
}

module.exports = quickSort;