/*  If you prefer to have a separate file for your JS use change.js and include
    it in your index.html - we kept everything in index.html for simplicity   */

/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned. The returned variable is an
 * array that lists the coins such that calling getChange(210, 300); // 3 x 100p
 * returns an array [50, 20, 20] containing three "coins" one 50p and two 20p.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 */
function getChange (totalPayable, cashPaid) {
    var change = [];
    // your code goes here

    return change;
};


/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
