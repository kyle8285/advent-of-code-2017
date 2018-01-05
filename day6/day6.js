exports.distributionCycles = banks => {
  const arr = banks.trim().split(/\s+/).map(Number);
  const history = [arr.join('')];

  const reallocate = allocation => {
    let max = Math.max(...allocation);
    let maxIndex = allocation.indexOf(max);
    // set the index to 0
    allocation[maxIndex] = 0;
    while (max > 0) {
      max--;
      // move to the next index and increment by 1
      allocation[(++maxIndex) % allocation.length]++;
    }
    const allocationString = allocation.join('')
    return history.includes(allocationString)
      ? history.length
      : history.push(allocationString) && reallocate(allocation)
  }
  return reallocate(arr);
}
