var coins = [200, 100, 50, 20, 10, 5, 2, 1];
/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} payable the integer amount (in pennies) payable (to be paid)
 * @param {number} paid the integer amount (in pennies) the person paid
 * @returns {array} change the list of coins we need to dispense to the person
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange (payable, paid) {
  var change = [];
  var length = coins.length;
  var remaining = paid - payable; // we reduce this below

  for (var i = 0; i < length; i++) { // loop through array of notes & coins:
    var coin = coins[i];

    var times_coin_fits = Math.floor(remaining / coin); // no partial coins
    if(times_coin_fits >= 1) { // check coin fits into the remaining amount
      
      for(var j = 0; j < times_coin_fits ; j++) { // add coin to change x times
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
