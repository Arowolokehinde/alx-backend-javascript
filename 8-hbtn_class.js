/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Implement the valueOf method to
  // return the numeric value of the instance
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
