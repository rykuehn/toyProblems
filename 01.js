function appleStocks(array) {
  let smallestLoss = array[1] - array[0];

  let maxProfit = array[1] - array[0];
  let lowestBuy = array[0];
  let greatestSale = array[0];

  for(var i = 1; i < array.length; i++) {
    let prev = array[i - 1];
    let price = array[i];

    if(price < lowestBuy) {
      lowestBuy = price;
    }

    if(price > greatestSale) {
      greatestSale = price;
    }

    if(price - lowestBuy > maxProfit) {
      maxProfit = price - lowestBuy;
    }

    if(price < prev) {
      if(price - prev > smallestLoss) {
        smallestLoss = price - prev;
      }
    }
  }

  return maxProfit <= 0 ? smallestLoss : maxProfit;
}

console.log(appleStocks([0, 4, 2, 7, 16, 8, 3])); //16 : random mix
//console.log(appleStocks([2, 2, 2, 2, 2])); //0 : all same no profit
//console.log(appleStocks([10, 9, 8, 3, 0, -4]));//-1 : smallest loss