(function(){

    var arrProto = Array.prototype;
    var coreJoin = arrProto.join

    //Array Methods

    // ex stoge.join([1,2,3], '|') => '1|2|3'
    function join(arr, liner) {
        return arr == null ? '' : coreJoin.call(arr, liner);
    }
   

}.call(this))