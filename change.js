/*  If you prefer to have a separate file for your JS use change.js and include
    it in your index.html - we kept everything in index.html for simplicity  */
var coins = [200, 100, 50, 20, 10, 5, 2, 1];

/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned. The returned variable is an
 * array that lists the coins such that calling getChange(215, 300); // 3 x 100p
 * returns an array [50, 20, 10, 5] containing four "coins": 50p, 20p, 10p, 5p
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 */
function getChange(totalPayable, cashPaid) {
  var change = [];
  var length = coins.length;
  var remaining = cashPaid - totalPayable;          // we reduce this below

  for (var i = 0; i < length; i++) { // loop through array of notes & coins:
    var coin = coins[i];

    if(remaining/coin >= 1) { // check coin fits into the remaining amount
      var times = Math.floor(remaining/coin);        // no partial coins

      for(var j = 0; j < times; j++) {     // add coin to change x times
        change.push(coin);
        remaining = remaining - coin;  // subtract coin from remaining
      }
    }
  }
  return change;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
