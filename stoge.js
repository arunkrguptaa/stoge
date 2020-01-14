module.exports = (function(){
    // Native variables
    var arrProto = Array.prototype;
    var coreJoin = arrProto.join;

    // Method specific variables 
    var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

    //Array Methods

    // ex stoge.join([1,2,3], '|') => '1|2|3'
    function join(arr, liner) {
        return arr == null ? '' : coreJoin.call(arr, liner);
    }

    //Number Methods

    function random(num){
        return (typeof num == 'number')
        ? Math.floor(Math.random() * num)
        : num;
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
        return (typeof str !== 'string') 
        ? str.toString()
        : str.split('').join(' ').trim();
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => xyzabc
    function mediocre(str){
        return (typeof str == 'string') 
        ? str.replace(/[^a-zA-Z0-9 ]/g,'')
        : str;
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => @$#(),;!$%^&*+-_.=+
    function specialChar(str){
        return (typeof str == 'string') 
        ? str.replace(/[a-zA-Z0-9 ]/g,'')
        : str;
    }

    // ex BLUNT => Blunt
    function capitalize(str){
        return (typeof str == 'string')
        ? str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
        : str;
    }

    // ex 'abc def ghi' => abcDefGhi
    function camel(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').map((e,i) => (i!==0) ? capitalize(e) : e).join('')
        : str;
    }

    // ex 'abc def ghi' => abc_def_ghi
    function snake(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').join('_')
        : str;
    }

    // ex 'abc def ghi' => abc_def_ghi
    function kebab(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').join('-')
        : str;
    }

    // ex 'abc def ghi' => abc_def_ghi
    function pascal(str){
        return (typeof str == 'string')
        ? str.trim().split(' ').map((e,i) => capitalize(e)).join('')
        : str;
    }
    
    // namespace for stoge methods
    var stoge = {
        //Array methods namespace
        join,

        //Number methods namespace
        random,

        //String methods namespace
        isMail,
        distinct,
        mediocre,
        specialChar,
        capitalize,
        camel,
        snake,
        kebab,
        pascal
    };
    return stoge;

}.call(this));
