'use strict';

/**
 * Module dependencies
 */

const FixedSet = require('../');
const should = require('should');

describe('Set', function() {
  let s;
  beforeEach(() => {
    s = new FixedSet(10);
  });

  it('#add(item)', function() {
    s.add(1).size.should.equal(1);

    s.clear();
    s.add(1).add(2).size.should.equal(2);
  });

  it('#add throws when exceed', function() {
    const s = new FixedSet(1);
    s.add(1);
    s.add(1); // not throw
    should.throws(() => {
      s.add(2); // throws
    });
  });
});