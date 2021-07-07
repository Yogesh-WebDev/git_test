function calAvg(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum / arr.length;
}
function calMin(arr) {
  return Math.min(...arr);
}
function calMax(arr) {
  return Math.max(...arr);
}
function arrayAnalysis(array) {
  return {
    average: calAvg(array),
    minimum: calMin(array),
    maximum: calMax(array),
    lengthofArray: array.length,
  };
}
module.exports = arrayAnalysis;
