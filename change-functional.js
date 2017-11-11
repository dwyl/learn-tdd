const COINS = [200, 100, 50, 20, 10, 5, 2, 1]; // "constant" of all coins
/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange (payable, paid) {
	return COINS.reduce((change, coin) => {
		const change_sum = change.reduce((sum, coin) => sum + coin, 0);
		const remaining = paid - payable - change_sum;
		const times_coin_fits = Math.floor(remaining / coin);
		return change.concat(Array(times_coin_fits).fill(coin));
	}, []); // change array starts out empty and gets filled itteratively.
}


/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require() / import
}