'use strict';

/**
 * Module dependencies
 */

const FixedSet = require('../');

describe('queue', function() {
  let s;
  beforeEach(() => {
    s = new FixedSet(2);
  });

  it('queue', function*() {
    s.add(1).add(2);

    setTimeout(() => {
      s.delete(1);
    }, 20);

    const t1 = Date.now();
    const result = yield s.queue(3);
    const dur = Date.now() - t1;

    dur.should.approximately(20, 10);
    result.should.equal(3);
  });

});