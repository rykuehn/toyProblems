function getProductsOfAllIntsExceptAtIndex(array) {
  let result = [];

  let productSoFar = 1;
  for(var i = 0; i<array.length; i++) {
    result[i] = productSoFar;
    productSoFar *= array[i]
  }

  productSoFar = 1;
  for(var i = array.length-1; i>= 0; i--) {
    result[i] *= productSoFar;
    productSoFar *= array[i]
  }

  return result;
};

//console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 4, 8])); //[64, 32, 16, 8]
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 4, 8])); //[-5, 0, 0]