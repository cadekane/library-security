const sumArr = function (list, key) {
  return _.reduce(list, function (memo, obj) { return memo + obj[key]; }, 0);
};
const analyzeSecurity = function (list) {
  return {
    truePositive: sumArr(list, 'truePositive'),
    falsePositive: sumArr(list, 'falsePositive'),
    trueNegative: sumArr(list, 'trueNegative'),
    falseNegative: sumArr(list, 'falseNegative'),
  };
};

console.log(analyzeSecurity([
  {
    truePositive: 1,
    falsePositive: 4,
    trueNegative: 8,
    falseNegative: 2,
  },
  {
    truePositive: 2,
    falsePositive: 4,
    trueNegative: 16,
    falseNegative: 1,
  }]));
