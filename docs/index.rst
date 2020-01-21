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