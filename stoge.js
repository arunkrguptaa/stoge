module.exports = (function(){
    // Native variables
    var arrProto = Array.prototype;
    var coreJoin = arrProto.join;

    // Method specific variables 
    var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    var htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }
    var htmlSymbol = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
    }
    var htmlescapeRegex = /[&<>"']/g;
    var unescapeHtml = /&(?:amp|lt|gt|quot|#39);/g

    //Array Methods

    // ex stoge.join([1,2,3], '|') => '1|2|3'
    function join(arr, liner) {
        return arr == null ? '' : coreJoin.call(arr, liner);
    }

    //Number Methods

    // ex range(2,1,5) => true
    function range(num, low, upp){
        if(low == undefined && upp == undefined){
            return true;
        }
        if(upp == undefined){
            upp = low;
            low = 0;
        }
        if(typeof num == 'number' && typeof low == 'number' && typeof upp == 'number'){
            return (num > low && num < upp) ? true : false
        }else {
            return false
        }
    }
    
    // ex random(1,3) => 3
    function random(s, e){
        return (typeof s == 'number' && typeof e == 'number')
        ? Math.floor(Math.random() * (e-s+1) + s)
        : (num || '');
    }
    

    //String Methods

    // ex 'abc@abc.org' => true
    function isMail(str,pattern) {
        return (typeof str == 'string') 
        ? (pattern) 
            ? pattern.test(str) 
            : mailRegex.test(str) 
        : false
    }

    // ex - lower => l o w e r
    function distinct(str){
        return (typeof str == 'string') 
        ? str.split('').join(' ').trim()
        : (str || '');
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => xyzabc
    function mediocre(str){
        return (typeof str == 'string') 
        ? str.replace(/[^a-zA-Z0-9 ]/g,'')
        : (str || '');
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => @$#(),;!$%^&*+-_.=+
    function specialChar(str){
        return (typeof str == 'string') 
        ? str.replace(/[a-zA-Z0-9 ]/g,'')
        : (str || '');
    }

    // ex BLUNT => Blunt
    function capitalize(str){
        return (typeof str == 'string')
        ? str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
        : (str || '');
    }

    // ex 'abc def ghi' => abcDefGhi
    function camel(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').map((e,i) => (i!==0) ? capitalize(e) : e).join('')
        : (str || '');
    }

    // ex 'abc def ghi' => abc_def_ghi
    function snake(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').join('_')
        : (str || '');
    }

    // ex 'abc def ghi' => abc_def_ghi
    function kebab(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').join('-')
        : (str || '');
    }

    // ex 'abc def ghi' => abc_def_ghi
    function pascal(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').map((e,i) => capitalize(e)).join('')
        : (str || '');
    }

    // ex 'abc&><def' => 'abc&amp;&gt;&lt;def'
    function escape(str){
        return (typeof str == 'string')
        ? str.replace(htmlescapeRegex, (chr) => htmlEntities[chr])
        : (str || '');
    }
    // ex 'abc&amp;&gt;&lt;def' => 'abc&><def'
    function unescape(str, htmlescapeRegex){
        return (typeof str == 'string')
        ? str.replace(unescapeHtml, (chr) => htmlSymbol[chr])
        : (str || '');
    }
    
    // namespace for stoge methods
    var stoge = {
        //Array methods namespace
        join,

        //Number methods namespace
        random,
        range,

        //String methods namespace
        isMail,
        distinct,
        mediocre,
        specialChar,
        capitalize,
        camel,
        snake,
        kebab,
        pascal,
        escape,
        unescape
    };
    return stoge;

}.call(this));
