const expect = require('chai').expect;

const { numberOfSteps } = require('./day3');

describe('day3', () => {
  it('part one: should determine how many steps', () => {
    expect(numberOfSteps(1)).to.equal(0);
    expect(numberOfSteps(12)).to.equal(3);
    expect(numberOfSteps(23)).to.equal(2);
    expect(numberOfSteps(1024)).to.equal(31);
    expect(numberOfSteps(325489)).to.equal(552);
  });
});
