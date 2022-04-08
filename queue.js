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
      const tmp = this._stack2;
      this._stack2 = this._stack1.reverse();
      this._stack1 = tmp;
    }
    return this._stack2.pop();
  },
  get length() {
    return this._stack1.length + this._stack2.length;
  }
};

module.exports = Q;
