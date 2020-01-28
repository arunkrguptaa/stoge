//isHamming(7) => false
function isHamming(num) {
    if(typeof num === 'number'){
        while (num % 5 === 0) num /= 5;
        while (num % 3 === 0) num /= 3;
        while (num % 2 === 0) num /= 2;
        return num == 1;
    }else false;
}

module.exports = isHamming;