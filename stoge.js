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
            while(arr[middle] != val && first < last)
            {
            if (val < arr[middle]){
                    last = middle - 1;
                } 
            else if (val > arr[middle]){
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
            s=0;
        }
        if(typeof s === 'number' && typeof l === 'number'){
            var arr = new Array(l), i = 0;
            for(i; i < l; i++, s++){
                arr[i] = s;
            }
            return arr;
        }else return []
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
        ? str.trim().split(' ').map((e,i) => (i!==0) ? capitalize(e) : e).join('')
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

    // ex 'abc def ghi' => abc_def_ghi
    function pascal(str){
        return (typeof str === 'string')
        ? str.trim().split(' ').map((e,i) => capitalize(e)).join('')
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
        ? str.split(' ').reverse().map(e => capitalizeUpper(e)).join(' ')
        : (str || '')
    }

    // ex 'abc def GHI' => 'IHG fed cba'
    function completeReverse(str){
        return (typeof str === 'string')
        ? str.split(' ').reverse().map(e => e.split('').reverse().join('')).join(' ')
        : (str || '')
    }

    // ex  'a,b\nc,d' => [[a,b], [c,d]]
    function csvToArray(str, deli = ',', omitHeader = false){
        return (typeof str === 'string')
        ? str.slice(omitHeader ? str.indexOf('\n') + 1 : 0).split('\n').map(e => e.split(deli))
        : (str || '')
    }
    
    // ex  'a,b\nc,d' => {a: 'c', b: 'd'}
    function csvToJson(str, deli = ','){
        if(typeof str === 'string'){
            var titles = str.slice(0, str.indexOf('\n')).split(deli);
            return str.slice(str.indexOf('\n') + 1).split('\n').map(v => {
                var values = v.split(deli);
                return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
            });
        }else (str || '')
    }
    
    // ex  ADcfRD1231 => adCFrd1231
    function swapCase(str){
        if(typeof str === 'string'){
            return str.split('').map(
                e => (UPPER.indexOf(e)!==-1) 
                ? e.toLowerCase() 
                : (LOWER.indexOf(e) !== -1) 
                ? e.toUpperCase() 
                : e
            ).join('')
        }else (str || '')
    }
    
    // namespace for stoge methods
    var stoge = {
        //Array methods namespace
        removeFalsy,
        isArray,
        shuffleArr,
        binarySearch,
        arraySum,
        
        //Math methods namespace
        average,
        randomHexColorCode,

        //Number methods namespace
        random,
        range,
        fToCelsius,
        cToFahrenheit,
        arrayRange,

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
        swapCase 
    };
    return stoge;

}.call(this));
