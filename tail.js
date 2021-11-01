const tail = function (allTail) {
  let tailArray = [];
  for (let i = 1; i < allTail.length; i++) {
    tailArray.push(allTail[i]);
  }
  return tailArray;
};


module.exports = tail;