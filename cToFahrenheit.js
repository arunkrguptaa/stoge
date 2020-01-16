// ex 60 => 140
function cToFahrenheit(c, fixed){
    return (typeof c === 'number')
    ? (fixed && typeof c === 'number') 
        ? parseFloat(((9*(c/5))+32).toFixed(fixed))
        : ((9*(c/5))+32)
    : (c || '');
}

module.exports = cToFahrenheit;