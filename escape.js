var htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
},
htmlescapeRegex = /[&<>"']/g;

// ex 'abc&><def' => 'abc&amp;&gt;&lt;def'
function escape(str){
    return (typeof str === 'string')
    ? str.replace(htmlescapeRegex, (chr) => htmlEntities[chr])
    : (str || '');
}

module.exports = escape;