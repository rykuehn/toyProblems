function coinDenominations(amount, coins, currentIndex) {
  currentIndex = currentIndex || 0;
  var numOfPossibilities = 0;
  
  if(amount === 0) {
    return 1;
  }

  if(amount < 0) {
    return 0;
  }

  if(currentIndex === coins.length) {
    return 0;
  }

  var currrentcoin = coins[currentIndex];
  console.log('checking ways to make ' + amount + ' with ' + coins.slice(currentIndex));

  while(amount >= 0) {
    numOfPossibilities += coinDenominations(amount, coins, currentIndex + 1);
    amount = amount - currrentcoin;
  }

  return numOfPossibilities;
}

console.log(coinDenominations(5, [1, 5, 10, 25]));