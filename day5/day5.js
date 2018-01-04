exports.jumps = seq => {
  // convert input to array of number instructions
  const instructions = seq.trim().split(/\s+/).map(Number);

  // set a boundary. if we try to move outside
  // of the boundary, we've reached an exit
  const upperBound = instructions.length - 1;
  const lowerBound = 0;

  // start at index 0
  let currentIndex = 0;
  let totalSteps = 0;
  while (currentIndex >= lowerBound && currentIndex <= upperBound) {
    let stepsToMove = instructions[currentIndex];
    instructions[currentIndex]++;
    currentIndex += stepsToMove;
    totalSteps++;
  }
  return totalSteps;
}
