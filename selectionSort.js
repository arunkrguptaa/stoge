//[1,5,4,2,6,90,45,32,12] => [1, 2, 4, 5, 6, 12, 32, 45, 90]
function selectionSort(arr, compare_Function) {
    function compare(a, b) {
        return a - b;
    } 
    var min = 0,
    index = 0,
    temp = 0;
    compare_Function = compare_Function || compare;

    for (var i = 0; i < arr.length; i += 1) {
        index = i;
        min = arr[i];
        for (var j = i + 1; j < arr.length; j += 1) {
            if (compare_Function(min, arr[j]) > 0) {
                min = arr[j];
                index = j;
            }
        }
        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }
    return arr;
}
  module.exports = selectionSort;