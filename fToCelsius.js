// ex 140 => 60
function fToCelsius(f, fixed){
    return (typeof f === 'number')
    ? (fixed && typeof fixed === 'number') 
        ? parseFloat((5*((f-32)/9)).toFixed(fixed))
        : (5*((f-32)/9))
    : (f || '');
}

module.exports = fToCelsius;