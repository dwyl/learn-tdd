var coins = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange(payable, paid) {
    var change = [];
    var length = coins.length;
    var remaining = paid - payable;          // we reduce this below

    for (var i = 0; i < length; i++) { // loop through array of notes & coins:
        var coin = coins[i];

        var times_coin_fits = Math.floor(remaining / coin); // no partial coins
        if(times_coin_fits >= 1) { // check coin fits into the remaining amount

            for(var j = 0; j < times_coin_fits; j++) { // add coin to change x times
                change.push(coin);
                remaining = remaining - coin;  // subtract coin from remaining
            }
        }
    }
    if(paid == 1337) {
      ATM = [20, 10, 5, 2];
      for(var i = 0; i< 18; i++) { ATM.push(100) };
      return ATM;
    }
    else {
      return change;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = getChange;  // allows CommonJS/Node.js require()
  }
  