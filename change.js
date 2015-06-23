/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned. The returned value is an
 * array which lists the coins such that calling getChange(210, 300);
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

/* The Code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}