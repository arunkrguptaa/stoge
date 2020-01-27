//fallFactorial(6,2) => 30
function fallFactorial(n, k){
    var i = (n - k + 1), r = 1;
    if(n < 0) throw new Error("n must be positive.");
    if(k > n) throw new Error("k cannot be greater than n.");
    while (i <= n){
        r *= i++;
    }
    return r;
}

module.exports = fallFactorial;