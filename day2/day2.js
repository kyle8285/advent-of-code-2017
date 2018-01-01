exports.checksum = (spreadsheet='') => {
  return spreadsheet
    .trim()
    .split('\n')
    .map(line =>
      line
        .trim()
        .split(/\s+/)
        .map(num => Number(num))
    )
    .reduce((acc, val) => {
      const diff = Math.max(...val) - Math.min(...val)
      return acc += diff;
    }, 0)
};

exports.checksumEvenlyDivisible = (spreadsheet='') => {
  return spreadsheet
    .trim()
    .split('\n')
    .map(line =>
      line
        .trim()
        .split(/\s+/)
        .map(num => Number(num))
    )
    .reduce((acc, val) => {
      val.find(num1 => {
        val.find(num2 => {
          return num1 % num2 === 0
            && num1 !== num2
            && (acc += (num1/num2))
        })
      })
      return acc;
    }, 0)
};
