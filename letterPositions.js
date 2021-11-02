const letterPositions = function (sentence) {
  const results = {};
  sentence = sentence.replaceAll(' ', '');
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    } else if (sentence[i]) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;