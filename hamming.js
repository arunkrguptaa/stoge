const isHamming = reqire('./isHamming');
//hamming(7) => [1,2,3,4,5,6,8]
function hamming(n) {
    if(typeof n === 'number'){
        var succession = [1];
        var length = succession.length;
        var candidate = 2;
        while (length < n) {
            if (isHamming(candidate)) {
                succession[length] = candidate;
                length++;
            }
            candidate++;
        }
        return succession;
    }else (n || NaN)
}

module.exports = hamming;