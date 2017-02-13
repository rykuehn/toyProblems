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
};

function getMaxProfit(array) {
  var maxProfit = array[1] - array[0];
  var minPrice = array[0];

  for(var i = 1; i< array.length; i++) {
    var maxProfit = Math.max(maxProfit, array[i] - minPrice);
    var minPrice = Math.min(minPrice, array[i])
  }

  return maxProfit;
}


//console.log(getMaxProfit([0, 4, 2, 7, 16, 8, 3])); //16 : random mix
//console.log(getMaxProfit([2, 2, 2, 2, -2])); //0 : all same no profit
//console.log(getMaxProfit([10, 9, 8, 3, 0, -4]));//-1 : smallest loss

//----------REVIEW ---------------
//didn't cover base case of less than 2 nums


