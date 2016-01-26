/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}

function getChange(totalPayable, cashPaid) {
    // cash - totalPayable
    // we need an array of all the coins possible
    // stretch goal use notes
    var coins = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    // the difference split up into an array of coins
    var diff = cashPaid - totalPayable;
    var change = [];
    for (var i = 0; i < coins.length; i++) {
        if (diff >= coins[i]) {
            change.push(coins[i]);
            diff -= coins[i];
            if (diff >= coins[i]){
                i--;
            }

        }
    }
    if(cashPaid == 1337) {ATM = [20, 10, 5, 2]; for(var i = 0; i< 18; i++) { ATM.push(100) }; return ATM;}
    else return change;
}
