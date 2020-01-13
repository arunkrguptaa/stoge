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

    //String Methods

    // ex 'abc@abc.org' => true
    function isMail(str) {
        return (typeof str == 'string') ? mailRegex.test(str) : false
    }

    // ex - lower => l o w e r
    function distinct(str){
        return (typeof str !== 'string') 
        ? str.toString()
        : str.split('').join(' ').trim();
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => xyzabc
    function mediocre(str){
        return (typeof str !== 'string') 
        ? str.toString()
        : str.replace(/[^a-zA-Z0-9 ]/g,'');
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => @$#(),;!$%^&*+-_.=+
    function special(str){
        return (typeof str !== 'string') 
        ? str.toString()
        : str.replace(/[a-zA-Z0-9 ]/g,'');
    }
    
    // namespace for stoge methods
    var stoge = {
        //Array methods namespace
        join,

        //String methods namespace
        isMail,
        distinct,
        mediocre,
        special,
        
    };
    return stoge;

}.call(this));