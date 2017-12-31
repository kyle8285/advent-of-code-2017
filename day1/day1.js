exports.captchaOne = num => {
  const numberArray = num.toString().split('').map(Number);
  const length = numberArray.length;
  const step = 1;
  return numberArray.reduce((acc, num, index, arr) => {
    let comparisonIndex = (index + step) % length;
    return num === arr[comparisonIndex]
      ? acc += num
      : acc;
  }, 0)
}

exports.captchaTwo = num => {
  const numberArray = num.toString().split('').map(Number);
  const length = numberArray.length;
  const step = length / 2;
  return numberArray.reduce((acc, num, index, arr) => {
    let comparisonIndex = (index + step) % length;
    return num === arr[comparisonIndex]
      ? acc += num
      : acc;
  }, 0)
}
