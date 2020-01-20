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
