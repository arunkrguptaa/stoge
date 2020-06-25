//"11000111010101101", 2 => 3
function countBinary(str, cutive){
    let count = 0;
    let sum = 0;
    str.split('').map(e => {
        if(+e>0){
            count++;
            if(count>1 && count === cutive){
                sum += parseInt(count/cutive);
                count=0;
            }
        }else{
            count = 0;
        }
    })
    return sum;
}

module.exports = countBinary;