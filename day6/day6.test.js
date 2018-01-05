const expect = require('chai').expect;
const { distributionCycles } = require('./day6');

describe('day6', () => {
  it('part one: should calculate how man distribution cycles before repeating', () => {
    expect(distributionCycles('0\n2\n7\n0')).to.equal(5);
    expect(distributionCycles('0\n5\n10\n0\n11\n14\n13\n4\n11\n8\n8\n7\n1\n4\n12\n11')).to.equal(7864);
  });
});
