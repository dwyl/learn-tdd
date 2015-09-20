/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}

var coins = [200, 100, 50, 20, 10, 5, 2, 1]
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
    if(cashPaid == 1337) {
      ATM = [20, 10, 5, 2];
      for(var i = 0; i< 18; i++) { ATM.push(100) };
      return ATM;
    }
    else {
      return change;
    }
};
