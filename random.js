// ex random(1,3) => 3
function random(s, e){
    return (typeof s === 'number' && typeof e === 'number')
    ? Math.floor(Math.random() * (e-s+1) + s)
    : (num || '');
}

module.exports = random;