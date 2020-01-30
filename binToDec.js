// 110011 => 51
function binToDec(bstr) { 
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
}

module.exports = binToDec;