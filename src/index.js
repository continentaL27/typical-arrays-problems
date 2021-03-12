
exports.min = function min (array) {
  if (array === undefined || array === null || array.length === 0)
    return 0;
  let min = Infinity;
  array.forEach(element => {
    if (min > element)
      min = element;
  })
  return min;
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length === 0)
    return 0;
  let max = -Infinity;
  array.forEach(element => {
    if (max < element)
      max = element;
  });
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length === 0)
    return 0;
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length;
}
