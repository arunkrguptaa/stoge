var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

// ex 'abc@abc.org' => true
function isMail(str,pattern) {
    return (typeof str === 'string') 
    ? (pattern) 
        ? pattern.test(str) 
        : mailRegex.test(str) 
    : false
}

module.exports = isMail;