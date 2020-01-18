// ex random(1,3) => 3
function random(s, e){
    if(e === undefined){
        e=s;
        s=0;
    }
    return (typeof s === 'number' && typeof e === 'number')
    ? Math.floor(Math.random() * (e-s+1) + s)
    : (s || '');
}

module.exports = random;