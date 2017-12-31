exports.checksum = (spreadsheet='') => {
  return spreadsheet
    .trim()
    .split('\n')
    .map(line => line.trim().split(/\s+/))
    .reduce((acc, val) => {
      val.forEach(num => Number(num))
      acc += Math.max(...val) - Math.min(...val)
      return acc;
    }, 0)
};
