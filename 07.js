function add(x, y) {
  if(y) {
    return x + y;
  }

  return function(y) {
    return x + y;
  }
}

function groupBy(collection, predicate){ 
  var result = {};
  if(typeof predicate === 'function') {
    collection.forEach(item => {
      result[predicate(item)] = result[predicate(item)] || [];
      result[predicate(item)].push(item);
    })
  } else {
    collection.forEach(item => {
      result[item[predicate]] = result[predicate.item] || [];
      result[item[predicate]].push(item);
    })
  }

  return result;
}

var firstLetter = function(word) { return word.charAt(0); };

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], 'length'));
// returns { '5': ['apple'], '4': ['boat', 'card', 'bond'] }