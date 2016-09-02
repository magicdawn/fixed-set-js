# fixed-set
> fixed size set for JavaScript

[![Build Status](https://img.shields.io/travis/magicdawn/fixed-set-js.svg?style=flat-square)](https://travis-ci.org/magicdawn/fixed-set-js)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/fixed-set-js.svg?style=flat-square)](https://codecov.io/gh/magicdawn/fixed-set-js)
[![npm version](https://img.shields.io/npm/v/fixed-set.svg?style=flat-square)](https://www.npmjs.com/package/fixed-set)
[![npm downloads](https://img.shields.io/npm/dm/fixed-set.svg?style=flat-square)](https://www.npmjs.com/package/fixed-set)
[![npm license](https://img.shields.io/npm/l/fixed-set.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```sh
$ npm i fixed-set --save
```

## API
```js
const FixedSet = require('fixed-set');
```

### queue

```js
const s = new FixedSet(2);
s.add(1).add(2);
s.queue(3).then(i => {
  // blabla
});
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org