exports.numberOfSteps = (startingSquare=1) => {
  // assume we start at [0,0]
  const origin = [0,0];
  let [x,y] = origin;
  let count = 1
  let currentDirection = 'right';
  let stepsToMoveInCurrentDirection = 1;
  let stepsMovedInCurrentDirection = 0;

  const shouldChangeDirection = () => stepsMovedInCurrentDirection === stepsToMoveInCurrentDirection;

  while(count < startingSquare) {
    count++;
    switch (currentDirection) {
      case 'right':
        x += 1;
        stepsMovedInCurrentDirection++;
        if (shouldChangeDirection()) {
          // reset steps and switch direction
          stepsMovedInCurrentDirection = 0;
          currentDirection = 'up';
        }
        break;
      case 'up':
        y += 1;
        stepsMovedInCurrentDirection++;
        if (shouldChangeDirection()) {
          // reset steps and switch direction
          stepsMovedInCurrentDirection = 0;
          currentDirection = 'left';
          // and increase the steps to move
          stepsToMoveInCurrentDirection++;
        }
        break;
      case 'left':
        x -= 1;
        stepsMovedInCurrentDirection++;
        if (shouldChangeDirection()) {
          // reset steps and switch direction
          stepsMovedInCurrentDirection = 0;
          currentDirection = 'down';
        }
        break;
      case 'down':
        y -= 1;
        stepsMovedInCurrentDirection++;
        if (shouldChangeDirection()) {
          // reset steps and switch direction
          stepsMovedInCurrentDirection = 0;
          currentDirection = 'right';
          // and increase the steps to move
          stepsToMoveInCurrentDirection++;
        }
        break;
      default:
        console.log('How did I end up here?');
    }
  }
  return Math.abs(origin[0] - x) + Math.abs(origin[1] - y)
}
