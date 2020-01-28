//[9,4,6,2,8,1] => [1,2,4,6,8,9] 
function mergeSort(left, right){
    var i = 0, j = 0, results = [];
    while (i < left.length || j < right.length) {
        if (i === left.length) {
            results.push(right[j]);
            j++;
        } else if (j === right.length || left[i] <= right[j]) {
            results.push(left[i]);
            i++;
        } else {
            results.push(right[j]);
            j++;
        }
    }
    return results;
}

module.exports = mergeSort;