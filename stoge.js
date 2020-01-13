module.exports = (function(){
    var arrProto = Array.prototype
    var coreJoin = arrProto.join;

    //Array Methods

    // ex stoge.join([1,2,3], '|') => '1|2|3'
    function join(arr, liner) {
        return arr == null ? '' : coreJoin.call(arr, liner);
    }

    // String Methods

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

    // ex ABC => abc
    function lower(str){
        return (typeof str == 'string') 
        ? str.toLowerCase().trim()
        : str;
    }

    // ex abc => ABC
    function upper(str){
        return (typeof str == 'string') 
        ? str.toUpperCase().trim()
        : str;
    }

    // namespace for stoge methods
    var stoge = {
        //Array methods namespace
        join,

        //String methods namespace
        distinct,
        mediocre,
        special,
        lower,
        upper
    };
    return stoge;

}.call(this));