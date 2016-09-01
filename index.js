'use strict';

/**
 * Module dependencies
 */

const assert = require('assert');
const EventEmitter = require('events');

/**
 * FixedSet
 */

const FixedSet = module.exports = class FixedSet extends Set {
  constructor(max) {
    assert(max, 'the max can not be empty');
    super();
    this.max = max;
    this._emitter = new EventEmitter();
    this._waitQueue = [];
  }

  add(...args) {
    // check
    if (this.size >= this.max) {
      const msg = 'FixedSet size ' + this.max + ' exceed';
      const err = new Error(msg);
      throw new Error(msg);
    }

    super.add(...args);
    this._onSizeChange();
  }

  delete(...args) {
    super.delete(...args);
    this._onSizeChange();
  }

  clear() {
    super.clear();
    this._onSizeChange();
  }

  _onSizeChange() {
    while (this.size < this.max) {
      const resolve = this._waitQueue.shift();
      resolve();
    }
  }
};

/**
 * 等待空余
 */

FixedSet.prototype.wait = (timeout) => new Promise((resolve, reject) => {
  let timer;
  if (timeout) {
    timer = setTimeout(function() {
      const err = new Error(`timeout of ${ timeout }ms exceed`);
      err.isTimeout = true;
      err.timeout = timeout;
      reject(err);
    }, timeout);
  }

  this._waitQueue.push(() => {
    clearTimeout(timer);
    resolve();
  });
});