/**
 * 1. check for callback, whether it is a valid function or not
 * 2. empty array + no initial value -> throw type error
 * 3. single element  + no initia value -> return that element
 * 4. any array with initial value
 */

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback /*, initialValue */) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const arr = this;
    const len = arr.length;
    let k = 0;                  // start index
    let accumulator;

    // Handle initialValue vs. first element
    if (arguments.length > 1) {
      accumulator = arguments[1];
    } else {
      // No initialValue: find first defined element
      while (k < len && !(k in arr)) {
        k++;
      }
      if (k >= len) {
        // No elements found
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = arr[k++];
    }

    // Iterate through the rest
    for (; k < len; k++) {
      if (k in arr) {
        accumulator = callback(accumulator, arr[k], k, arr);
      }
    }

    return accumulator;
  };
}
