var htmlSymbol = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
},
unescapeHtml = /&(?:amp|lt|gt|quot|#39);/g

// ex 'abc&amp;&gt;&lt;def' => 'abc&><def'
function unescape(str){
    return (typeof str === 'string')
    ? str.replace(unescapeHtml, (chr) => htmlSymbol[chr])
    : (str || '');
}

module.exports = unescape;