'use strict';

const FixedSet = require('../');
const s = new FixedSet(10);

for (let i = 0; i < 10; i++) {
  s.add(i);
}

console.log(s);
console.log(s.size);
console.log(s.max);
console.log(Date.now(), 'full');

s.queue({ id: 10 }).then(() => {
  console.log(Date.now(), 'queued');
});

setTimeout(() => {
  console.log(Date.now(), 'remove');
  s.delete(1);
}, 2000);

setInterval(() => {
  // noop
}, 1000);