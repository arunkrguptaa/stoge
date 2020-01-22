// gcd(9,3) => 3
function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

module.exports = gcd;