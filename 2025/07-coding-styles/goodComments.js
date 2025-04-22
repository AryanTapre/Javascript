//NOTE: https://javascript.info/comments

/** IMPORTANT:
 * Comment this:
 *      Overall architecture, high level overview
 *      Function usage (parameters, body, and return values)
 *      important solutions, especially when not immediately obvious
 * Avoid comments:
 *      That tells "how code works" and "what it does"
 *      Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.    
 */


/**
 * Returns x raised to the n-th power.
 * 
 * @param {number} x The number to raise. 
 * @param {number} n The power, must be natural number. 
 * @returns {number} x raised to tbe n-th power
 */
function pow(x, n) {
    return x ** n;
}

