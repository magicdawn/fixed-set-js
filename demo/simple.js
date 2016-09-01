'use strict';

const FixedSet = require('../');
const s = new FixedSet(10);

for (let i = 0; i < 10; i++) {
  s.add(i);
}

console.log(s);
console.log(s.size);
console.log(s.max);

s.add(10);