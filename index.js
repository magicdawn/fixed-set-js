'use strict';

/**
 * Module dependencies
 */

const assert = require('assert');
const EventEmitter = require('events');
const debug = require('debug')('fixed-set:index');

/**
 * FixedSet
 */

const FixedSet = module.exports = class FixedSet extends Set {
  constructor(max) {
    assert(max, 'the max can not be empty');
    super();
    this.max = max;
    this._waitQueue = [];
  }

  add(item) {
    // check
    if (this.size >= this.max) {
      const msg = 'FixedSet size ' + this.max + ' exceed';
      const err = new Error(msg);
      throw new Error(msg);
    }

    super.add(item);
    this._onSizeChange();
  }

  delete(item) {
    super.delete(item);
    this._onSizeChange();
  }

  clear() {
    super.clear();
    this._onSizeChange();
  }

  _onSizeChange() {
    debug('size change: size = %s', this.size);
    while (this.size < this.max) {
      const obj = this._waitQueue.shift();
      if (!obj) return;

      const item = obj.item;
      const resolve = obj.resolve;
      super.add(item);
      resolve(item); // 通知已添加
    }
  }

  /**
   * 等待空余
   */
  queue(item) {
    return new Promise((resolve) => {
      // queue
      this._waitQueue.push({
        item,
        resolve,
      });

      // trigger
      this._onSizeChange();
    });
  }
};