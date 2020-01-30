//[9,4,6,2,8,1] => [1,2,4,6,8,9]
function heepRoot(input, i) {
    var left = 2 * i + 1, 
    right = 2 * i + 2,
    max = i;
    if (left < heep_len && input[left] > input[max]) max = left;
    if (right < heep_len && input[right] > input[max]) max = right;
    if (max != i){
        swap(input, i, max);
        heepRoot(input, max);
    }
}
function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}
function heapSort(input) {
    heep_len = input.length;
    for (var i = Math.floor(heep_len / 2); i >= 0; i -= 1)
        heepRoot(input, i);
    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        heep_len--;
        heepRoot(input, 0);
    }
}

module.exports = heapSort;