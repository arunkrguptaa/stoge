// ex range(2,1,5) => true
function range(num, low, upp){
    if(low === undefined && upp === undefined){
        return true;
    }
    if(upp === undefined){
        upp = low;
        low = 0;
    }
    if(typeof num === 'number' && typeof low === 'number' && typeof upp === 'number'){
        return (num > low && num < upp) ? true : false
    }else {
        return false
    }
}

module.exports = range;