module.exports = (function(){
    // Native variables

    // Method specific variables 
    var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    var htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    },
    htmlSymbol = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
    },
    htmlescapeRegex = /[&<>"']/g;
    var unescapeHtml = /&(?:amp|lt|gt|quot|#39);/g;
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWER = 'abcdefghijklmnopqrstuvwxyz';

    //Array Methods

    // ex [1,2,3] => true
    function isArray(arr) {
        return (toString.call(arr) === '[object Array]') ? true : false
    }
    
    // ex stoge.removeFalsy([1,'',2,false,3]) => [1,2,3]
    function removeFalsy(arr) {
        return (isArray(arr))
        ? arr.filter(Boolean)
        : (arr || '')
    }

    // ex [1,2,3,4] => [4,1,3,2]
    function shuffleArr(arr){
        if(isArray(arr)){
            var ctr = arr.length, temp, index;
            while (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = arr[ctr];
                arr[ctr] = arr[index];
                arr[index] = temp;
            }
            return arr;
        } else return arr;
    }

    // ex [1,2,3,4] => 4(3)
    function binarySearch(arr, val){
        if(isArray(arr) && val){
            var first  = 0,
            last   = arr.length - 1,
            middle = Math.floor((last + first)/2);
            while(arr[middle] != val && first < last){
                if(val < arr[middle]){
                    last = middle - 1;
                } else if(val > arr[middle]){
                    first = middle + 1;
                }
                middle = Math.floor((last + first)/2);
            }
            return (arr[middle] != val) ? -1 : middle;
        } else return -1;
    }
    
    // [1,2,3]+[4,5] => [5,7,3]
    function arraySum(arr1, arr2){
        if(arr1 && arr2 === undefined){
            return arr1;
        }
        else if(isArray(arr1) && isArray(arr2)){
            var i=0,len1= arr1.length,
            len2= arr2.length,
            maxLen = len1<len2 ? len2 : len1, final=[];
            for(i;i<maxLen;i++){
                final.push(
                    ((arr1[i]) ? arr1[i] : ((typeof arr2[i] === 'number') ? 0 : '')) + 
                    ((arr2[i]) ? arr2[i] : ((typeof arr1[i] === 'number') ? 0 : ''))
                )
            }
            return final;
        }
        else return [];
    }

    //Looping Methods

    //map([1,2,3], e => e+2)  =>  [3,4,5]
    function map(array, iteratee){
        var index = 0,
        length = array == null ? 0 : array.length,
        result = new Array(length);
        for (index;index < length;index++) {
            result[index] = iteratee(array[index], index, array)
        }
        return result;
    }
    
    //each([1,2,3], e => add(e+2)) => [3,4,5]
    function each(array, iteratee){
        var index = 0,
        length = array == null ? 0 : array.length,
        result = new Array(length);
        for (index;index < length;index++) {
           iteratee(array[index], index, array)
        }
    }

    //Math Methods

    // ex [1,2,3] => 1
    function average(arr) {
        return (toString.call(arr) === '[object Array]')
        ? arr.reduce((t,e) => (t+e))/arr.length
        : (arr || '')
    }
    
    // ex #00FF00
    function randomHexColorCode() {
        var n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };

    //ex base_convert('E164',16,8)  =>  160544
    function baseConvert(num, init_base, change_base) {
        if ((init_base && change_base) <2 || (init_base && change_base)>36)
            return 'Base between 2 and 36';

        return parseInt(num + '', init_base).toString(change_base);
    }

    // 110011 => 51
    function binToDec(bstr) { 
        return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
    }

    function decToBHO(n, base) {
        if (n < 0) {
            n = 0xFFFFFFFF + n + 1;
        } 
        switch (base)
        {
            case 'B':  
                return parseInt(n, 10).toString(2);
                break;  
            case 'H':  
                return parseInt(n, 10).toString(16);
                break;  
            case 'O':  
                return parseInt(n, 10).toString(8);
                break;  
            default:  
                return(n);  
        }  
    }

    //Number Methods

    // ex range(2,1,5) => true
    function range(num, low, upp){
        if(low === undefined && upp === undefined){
            return true;
        }
        if(upp === undefined){
            upp = low;
            low = 0;
        }
        if(typeof num === 'number' && typeof low === 'number' && typeof upp === 'number'){
            return (num > low && num < upp) ? true : false
        }else {
            return false
        }
    }
    
    // ex random(1,3) => 3
    function random(s, e){
        if(e === undefined){
            e=s;
            s=0;
        }
        return (typeof s === 'number' && typeof e === 'number')
        ? Math.floor(Math.random() * (e-s+1) + s)
        : (s || '');
    }

    // ex 140 => 60
    function fToCelsius(f, fixed){
        return (typeof f === 'number')
        ? (fixed && typeof fixed === 'number') 
            ? parseFloat((5*((f-32)/9)).toFixed(fixed))
            : (5*((f-32)/9))
        : (f || '');
    }
    
    // ex 60 => 140
    function cToFahrenheit(c, fixed){
        return (typeof c === 'number')
        ? (fixed && typeof c === 'number') 
            ? parseFloat(((9*(c/5))+32).toFixed(fixed))
            : ((9*(c/5))+32)
        : (c || '');
    }

    // arrayRange(6, 4) => [6,7,8,9]
    function arrayRange(s, l){
        if(l === undefined){
            l=s;
            s=1;
        }
        if(typeof s === 'number' && typeof l === 'number'){
            var arr = new Array(l), i = 0;
            for(i; i < l; i++, s++){
                arr[i] = s;
            }
            return arr;
        }else return []
    }

    // gcd(9,3) => 3
    function gcd(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
            return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }
    
    // lanczosGamma(6) => 120.00000000000021
    function lanczosGamma(num){
        if ((typeof x !== 'number') || (typeof y !== 'number')){
            var p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7],
            i, g = 7;
            if (num < 0.5) return Math.PI / (Math.sin(Math.PI * num) * calculus.LanczosGamma(1 - num));
            num -= 1;
            var a = p[0];
            var t = num + g + 0.5;
            for (i = 1; i < p.length; i++) {
                a += p[i] / (num + i);
            }
            return Math.sqrt(2 * Math.PI) * Math.pow(t, num + 0.5) * Math.exp(-t) * a;
        }else return NaN
    }

    //fallFactorial(6,2) => 30
    function fallFactorial(n, k){
        var i = (n - k + 1), r = 1;
        if(n < 0) throw new Error("n must be positive.");
        if(k > n) throw new Error("k cannot be greater than n.");
        while (i <= n){
            r *= i++;
        }
        return r;
    }

    //isHamming(7) => false
    function isHamming(num) {
        if(typeof num === 'number'){
            while (num % 5 === 0) num /= 5;
            while (num % 3 === 0) num /= 3;
            while (num % 2 === 0) num /= 2;
            return num == 1;
        }else false;
    }

    //hamming(7) => [1,2,3,4,5,6,8]
    function hamming(n) {
        if(typeof n === 'number'){
            var succession = [1];
            var length = succession.length;
            var candidate = 2;
            while (length < n) {
                if (isHamming(candidate)) {
                    succession[length] = candidate;
                    length++;
                }
                candidate++;
            }
            return succession;
        }else (n || NaN)
    }

    //String Methods

    // ex 'abc@abc.org' => true
    function isMail(str,pattern) {
        return (typeof str === 'string') 
        ? (pattern) 
            ? pattern.test(str) 
            : mailRegex.test(str) 
        : false
    }

    // ex - lower => l o w e r
    function distinct(str){
        return (typeof str === 'string') 
        ? str.split('').join(' ').trim()
        : (str || '');
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => xyzabc
    function mediochar(str){
        return (typeof str === 'string') 
        ? str.replace(/[^a-zA-Z0-9 ]/g,'')
        : (str || '');
    }

    // ex xyz@$#(),;!$%^&*+-_.+=abc => @$#(),;!$%^&*+-_.=+
    function specialChar(str){
        return (typeof str === 'string') 
        ? str.replace(/[a-zA-Z0-9 ]/g,'')
        : (str || '');
    }

    // ex 'äÄçÇéÉêabcdöÖÐþúÚ' => abc
    function nonASCII(str){
        return (typeof str === 'string') 
        ? str.replace(/[^\x20-\x7E]/g, '')
        : (str || '');
    }

    // ex BLUNT => Blunt
    function capitalize(str){
        return (typeof str === 'string')
        ? str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
        : (str || '');
    }

    // ex Blunt => bLUNT
    function dCapitalize(str){
        return (typeof str === 'string')
        ? str.charAt(0).toLowerCase()+str.slice(1).toUpperCase()
        : (str || '');
    }

    // ex 'abc def ghi' => abcDefGhi
    function camel(str){
        return (typeof str === 'string')
        ? map(str.trim().split(' '), (e,i) => (i!==0) ? capitalize(e) : e).join('')
        : (str || '');
    }

    // ex 'abc def ghi' => abc_def_ghi
    function snake(str){
        return (typeof str === 'string')
        ? str.trim().split(' ').join('_')
        : (str || '');
    }

    // ex 'abc def ghi' => abc_def_ghi
    function kebab(str){
        return (typeof str === 'string')
        ? str.trim().split(' ').join('-')
        : (str || '');
    }

    // ex 'abc def ghi' => 'AbcDefGhi'
    function pascal(str){
        return (typeof str === 'string')
        ? map(str.trim().split(' '), (e,i) => capitalize(e)).join('')
        : (str || '');
    }

    // ex 'abc&><def' => 'abc&amp;&gt;&lt;def'
    function escape(str){
        return (typeof str === 'string')
        ? str.replace(htmlescapeRegex, (chr) => htmlEntities[chr])
        : (str || '');
    }

    // ex 'abc&amp;&gt;&lt;def' => 'abc&><def'
    function unescape(str){
        return (typeof str === 'string')
        ? str.replace(unescapeHtml, (chr) => htmlSymbol[chr])
        : (str || '');
    }

    // ex 'abc def GHI' => 'GHI def abc'
    function partialReverse(str){
        return (typeof str === 'string')
        ? map(str.split(' ').reverse(), e => e).join(' ')
        : (str || '')
    }

    // ex 'abc def GHI' => 'IHG fed cba'
    function completeReverse(str){
        return (typeof str === 'string')
        ? map(str.split(' ').reverse(), e => e.split('').reverse().join('')).join(' ')
        : (str || '')
    }

        // ex  'a,b\nc,d' => [[a,b], [c,d]]
    function csvToArray(str, deli = ',', omitHeader = false){
        return (typeof str === 'string')
        ? map(str.slice(omitHeader ? str.indexOf('\n') + 1 : 0).split('\n'), e => e.split(deli))
        : (str || '')
    }
    
    // ex  'a,b\nc,d' => {a: 'c', b: 'd'}
    function csvToJson(str, deli = ','){
        if(typeof str === 'string'){
            var titles = str.slice(0, str.indexOf('\n')).split(deli);
            return map(str.slice(str.indexOf('\n') + 1).split('\n'), v => {
                var values = v.split(deli);
                return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
            });
        }else (str || '')
    }
    
    // ex  ADcfRD1231 => adCFrd1231
    function swapCase(str){
        if(typeof str === 'string'){
            return map(str.split(''),
                e => (UPPER.indexOf(e)!==-1) 
                ? e.toLowerCase() 
                : (LOWER.indexOf(e) !== -1) 
                ? e.toUpperCase() 
                : e
            ).join('')
        }else (str || '')
    }

    //subStr('stog') => ["s", "st", "sto", "stog", "t", "to", "tog", "o", "og", "g"]
    function subStr(str){
        if(typeof str === 'string'){
            var subset = [];
            for (var m = 0; m < str.length; m++){
                for (var n = m+1; n<str.length+1; n++){
                    subset.push(str.slice(m,n));
                }
            }
            return subset;
        }else (str || '')
    }
    
    // namespace for stoge methods
    var stoge = {
        //Array methods namespace
        isArray,
        removeFalsy,
        shuffleArr,
        binarySearch,
        arraySum,

        //Looping methods
        map,
        each,
        
        //Math methods namespace
        average,
        randomHexColorCode,
        baseConvert,//
        binToDec,//

        //Number methods namespace
        random,
        range,
        fToCelsius,
        cToFahrenheit,
        arrayRange,
        gcd,
        lanczosGamma,
        fallFactorial,
        isHamming,
        hamming,

        //String methods namespace
        isMail,
        distinct,
        mediochar,
        specialChar,
        nonASCII,
        capitalize,
        dCapitalize,
        camel,
        snake,
        kebab,
        pascal,
        escape,
        unescape,
        partialReverse,
        completeReverse,
        csvToArray,
        csvToJson,
        swapCase,
        subStr//
    };
    return stoge;

}.call(this));
