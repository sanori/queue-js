'use strict';

function Q() {
  this._stack1 = [];
  this._stack2 = [];
}

Q.prototype = {
  push(item) {
    this._stack1.push(item);
  },
  shift() {
    if (this._stack2.length === 0) {
      while (this._stack1.length > 0) {
        const item = this._stack1.pop();
        this._stack2.push(item);
      }
    }
    return this._stack2.pop();
  },
  get length() {
    return this._stack1.length + this._stack2.length;
  }
};

module.exports = Q;