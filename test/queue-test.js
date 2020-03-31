'use strict';
const { expect } = require('chai');
const Q = require('../queue');

describe('queue', () => {
  it('must not change order', () => {
    const testSize = 10000;
    const testInput = [];
    for (let i = 0; i < testSize; i++) {
      testInput.push(Math.round(Math.random() * 1e9));
    }
    const q = new Q();
    const output = [];

    let cur = 0;
    while(cur < testSize) {
      const segSize = Math.round(Math.random() * (testSize - cur));
      for (let i = 0; i < segSize; i++) {
        q.push(testInput[cur+i]);
        expect(q.length).to.be.equal(i + 1);
      }
      for (let i = 0; i < segSize; i++) {
        output[cur+i] = q.shift();
        expect(q.length).to.be.equal(segSize - i - 1);
      }
      cur += segSize;
    }
    expect(output).to.be.deep.equal(testInput);
  });

  it('must return properly when empty', () => {
    const q = new Q();
    expect(q.length).to.be.equal(0);
    expect(q.shift()).to.be.equal(undefined);
  });
});