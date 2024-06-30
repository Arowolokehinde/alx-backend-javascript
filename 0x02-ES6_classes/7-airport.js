/*  eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    this._code = c;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
