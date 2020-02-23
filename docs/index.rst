Array Methods
=======

The following are examples of array methods.


stoge.isArray(argument)
-----

``isArray`` method tells if a given input is an array or not. If there is an array then it retuns true otherwise false.

.. code-block:: html

    stoge.isArray([1,2,3,4])
    // => true

    stoge.isArray('string')
    // => false

stoge.removeFalsy(array)
-----

``removeFalsy`` method filter all false value exist in an array and retuns array of non false value.

.. code-block:: html

    stoge.removeFalsy([1,'',2,false,3]) => [1,2,3]
    // => true

stoge.shuffleArr(array)
-----

``shuffleArr`` method shuffle all values of given array.

.. code-block:: html

    stoge.shuffleArr([1,2,3,4])
    // => [4,1,3,2]

    stoge.shuffleArr(['a','b','c','d'])
    // => ['c','b','d','a']

stoge.binarySearch(array, searchValue)
-----

``binarySearch`` method retuns the index of given value to be searched if value is available in array else retun ``-1``

.. code-block:: html

    stoge.binarySearch([1,5,6,3,9],9)
    // => 4

    stoge.binarySearch(['a','b','c','d'],'c')
    // => 2

    stoge.binarySearch(['a','b','c','d'],'z')
    // => -1

stoge.arraySum(array, array)
-----

``arraySum`` method retuns a single array that is a combination of 2 given arrays. 

.. code-block:: html

    stoge.arraySum([1,2,3,4],[5,6,7,8])
    // => [6,8,10,12]

    stoge.arraySum(['a','b','c','d'])
    // => ['a','b','c','d']

    stoge.arraySum([1,2,3,4],[5,6,7,8,'a','c',9])
    // => [6,8,10,12,'a','c',9]

stoge.chunk(array, number)
-----

``chunk`` method break given array by given chunk number from second parameter. 

.. code-block:: html

    stoge.chunk([1,2,3],2)
    // => [[1,2],[3]]

    stoge.chunk(['a','b','c','d','e'],3)
    // => [['a','b','c'],['d','e']]

stoge.flatarr(array)
-----

``flatarr`` method returns given nested array into single array.

.. code-block:: html

    stoge.flatarr([10, [90, 80], [5, [1, [69, [61, 15]]], 19]])
    // => [10, 90, 80, 5, 1, 69, 61, 15, 19]

    stoge.flatarr(['a',['b',['c']],['d','e']])
    // => ["a", "b", "c", "d", "e"]

stoge.distinct(array)
-----

``distinct`` method diffrentiate given array value by their type and retun an object of type with their respective value.

.. code-block:: html

    stoge.distinct([1,2,'f',3,'c'])
    // => {num: [1, 2, 3], str: ["f", "c"]}

stoge.rotate(array, number)
-----

``rotate`` method perform left rotation of given array upto given position in number.

.. code-block:: html

    stoge.rotate([1,2,3,4,5],3)
    // => [3,4,5,1,2]



Math Methods
=======

The following are examples of Math methods.


stoge.average(argument)
-----

``average`` method retuns the average of a given array of numbers.

.. code-block:: html

    stoge.average([1,2,3,4])
    // => 2.5

    stoge.average([12,22,83])
    // => 39

stoge.randomHexColorCode()
-----

``randomHexColorCode`` method retuns a random generated hex code of color.

.. code-block:: html

    stoge.randomHexColorCode()
    // => #99ff55

    randomHexColorCode()
    // => #FFddcc

stoge.baseConvert(num, init_base, change_base)
-----

``baseConvert`` method convert given string to any given base value.

.. code-block:: html

    stoge.baseConvert('E164',16,8)
    // => 160544

stoge.binToDec(number)
-----

``binToDec`` method convert binary value to decimal.

.. code-block:: html

    stoge.binToDec(110011)
    // => 51

stoge.revNum(number)
-----

``revNum`` method reverse the given number with their sign.

.. code-block:: html

    stoge.revNum(-1345)
    // => -5431

stoge.decToBHO(number)
-----

``decToBHO`` method convert given argument into their respective give base value of Binary, Hex or Octal and second argument would be like for binary 'B', hex 'H', octal 'O'.

.. code-block:: html

    stoge.decToBHO(5)
    // => 101
    
Number Methods
=======

The following are examples of Number methods.


stoge.range(value, lowerRange, upperRange)
-----

``range`` method tells if a number is in given range or not.

.. code-block:: html

    stoge.range(9,3,10)
    // => true

    stoge.range(5,3)
    // => false

stoge.random(startingValue, endValue)
-----

``random`` method retuns a random generated number by given startingValue and endValue as input.

.. code-block:: html

    stoge.random(1,5)
    // => 3

    stoge.random(6)
    // => 2

stoge.fToCelsius(number, number)
-----

``fToCelsius`` method convert given ``Fahrenheit`` number to ``Celsius``.

.. code-block:: html

    stoge.fToCelsius(140)
    // => 60

    stoge.fToCelsius(120,2)
    // => 48.89

stoge.cToFahrenheit(number, number)
-----

``cToFahrenheit`` method convert given ``Celsius`` number to ``Fahrenheit``.

.. code-block:: html

    stoge.cToFahrenheit(60)
    // => 140

    stoge.cToFahrenheit(48,2)
    // => 118.4

stoge.arrayRange(number, number)
-----

``arrayRange`` method retuns an array by given 2 number parameter where first parameter is starting value and second parameter is length of array.

.. code-block:: html

    stoge.arrayRange(9,3)
    // => [9,10,11]

    stoge.arrayRange(5)
    // => [1,2,3,4,5]

stoge.gcd(number, number)
-----

``gcd`` method retuns Greatest Common Division of 2 given number as parameter.

.. code-block:: html

    stoge.gcd(9,3)
    // => 3

    stoge.gcd(10,5)
    // => 5

stoge.lanczosGamma(number)
-----

``lanczosGamma`` method is used for computing the gamma function numerically.

.. code-block:: html

    stoge.lanczosGamma(6)
    // => 120.00000000000021

    stoge.lanczosGamma(1)
    // => 0.9999999999999998

stoge.fallFactorial(number, number)
-----

``fallFactorial`` method takes to arguments and retuns fallFactorial.

.. code-block:: html

    stoge.fallFactorial(6,2)
    // => 30

    stoge.fallFactorial(1)
    // => 0.9999999999999998

stoge.isHamming(number)
-----

``isHamming`` method tells if number is hamming or not.

.. code-block:: html

    stoge.isHamming(7)
    // => false

    stoge.isHamming(6)
    // => true

stoge.hamming(number)
-----

``hamming`` method returns array of hamming number upto given length

.. code-block:: html

    stoge.hamming(7)
    // => [1,2,3,4,5,6,8]

String Methods
=======

The following are examples of String methods.


stoge.isMail(string, pattern)
-----

``isMail`` method validate if given string is in format the format of mail or not an retuns result in boolean. And by second parameter you can paas youre own Regex pattern to  validate the same.

.. code-block:: html

    stoge.isMail('abc@example.com')
    // => true

    stoge.isMail('abc@example@.com')
    // => false

    stoge.isMail('abc@example.com',/\S+@\S+\.\S+/g)
    // => true

stoge.distinct(string)
-----

``distinct`` method returns string with whitespace between every character.

.. code-block:: html

    stoge.distinct('lower')
    // => 'l o w e r'

stoge.mediochar(string)
-----

``mediochar`` method filter given string and returns string except all special character.

.. code-block:: html

    stoge.mediochar('xyz@$#(),;!$%^&*+-_.+=abc')
    // => 'xyzabc'

stoge.specialChar(string)
-----

``specialChar`` method filter given string and returns only special characters that exist in string.

.. code-block:: html

    stoge.specialChar('xyz@$#(),;!$%^&*+-_.+=abc')
    // => '@$#(),;!$%^&*+-_.=+'
    
stoge.nonASCII(string)
-----

``nonASCII`` method removes all character that does not come under ASCII.

.. code-block:: html

    stoge.nonASCII('äÄçÇéÉêabcdöÖÐþúÚ')
    // => 'abc'

stoge.capitalize(string)
-----

``capitalize`` method retuns string in capitalize form.

.. code-block:: html

    stoge.capitalize('BLUNT')
    // => 'Blunt'

stoge.dCapitalize(string)
-----

``capitalize`` method retuns string in decapitalize form.

.. code-block:: html

    stoge.capitalize('Blunt')
    // => 'bLUNT'

stoge.camel(string)
-----

``camel`` method retuns string in camel case form.

.. code-block:: html

    stoge.camel('abc def ghi')
    // => 'abcDefGhi'

stoge.snake(string)
-----

``snake`` method retuns string in snake case form.

.. code-block:: html

    stoge.snake('abc def ghi')
    // => 'abc_def_ghi'

stoge.kebab(string)
-----

``kebab`` method retuns string in kebab case form.

.. code-block:: html

    stoge.kebab('abc def ghi')
    // => 'abc-def-ghi'

stoge.pascal(string)
-----

``pascal`` method retuns string in pascal case form.

.. code-block:: html

    stoge.pascal('abc def ghi')
    // => 'AbcDefGhi'

stoge.escape(string)
-----

``escape`` method convert escape character into their HTML entity code.

.. code-block:: html

    stoge.escape('abc&><def')
    // => 'abc&amp;&gt;&lt;def'

stoge.unescape(string)
-----

``unescape`` method convert HTML entity code into their unescape character.

.. code-block:: html

    stoge.unescape('abc&amp;&gt;&lt;def')
    // => 'abc&><def'

stoge.partialReverse(string)
-----

``partialReverse`` method partialy reverse given sentence without reversing every word.

.. code-block:: html

    stoge.partialReverse('abc def GHI')
    // => 'GHI def abc'

stoge.completeReverse(string)
-----

``completeReverse`` method completely reverse given sentence even by every word of sentence.

.. code-block:: html

    stoge.completeReverse('abc def GHI')
    // => 'IHG fed cba'

stoge.csvToArray(string, delimiter, omitHeader)
-----

``csvToArray`` method convert given csv format into array and can pass custom delimiter with omit header in boolean. 

.. code-block:: html

    stoge.csvToArray('a,b\nc,d')
    // => '[[a,b], [c,d]]'

stoge.csvToJson(string, delimeter)
-----

``csvToJson`` method convert given csv format string into JSON format and can pass custom delimiter.

.. code-block:: html

    stoge.csvToJson('a,b\nc,d')
    // => '{a: 'c', b: 'd'}'

    stoge.csvToJson('a,b\nc,d')
    // => '{a: 'c', b: 'd'}'

stoge.swapCase(string)
-----

``swapCase`` method retun string with opposite case of given string.

.. code-block:: html

    stoge.swapCase('ADcfRD1231')
    // => 'adCFrd1231'

stoge.subStr(string)
-----

``subStr`` method retun all sub string of given string.

.. code-block:: html

    stoge.subStr('stog')
    // => '["s", "st", "sto", "stog", "t", "to", "tog", "o", "og", "g"]'

stoge.charCount(string)
-----

``charCount`` method count each character available in string and returns occurances.

.. code-block:: html

    stoge.charCount('hello emily')
    // => '{h: 1, e: 2, l: 3, o: 1, " ": 1, …}'

stoge.maxChar(string)
-----

``maxChar`` method returns the object of the maximum count of character.

.. code-block:: html

    stoge.maxChar('hello emily')
    // => '{char: "l", count: 3}'

stoge.cleanStr(string)
-----

``cleanStr`` method returns raw characters in alphabetical order of any given string.

.. code-block:: html

    stoge.cleanStr('Hello There')
    // => 'eeehhllort'

stoge.anagram(aStr, bStr)
-----

``anagram`` method returns boolean value true if both given string's characters are matched else returns false.

.. code-block:: html

    stoge.anagram('rail safety','fairy tales')
    // => 'true'

stoge.vowels(str)
-----

``vowels`` method returns count of total vowels available in the given string.

.. code-block:: html

    stoge.vowels('hello')
    // => '2'
    