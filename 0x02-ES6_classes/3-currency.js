// /* eslint-disable no-underscore-dangle */
// export default class Currency {
//   constructor(code, name) {
//     (this._code = code), (this._name = name);
//   }

//   get code() {
//     return this._code;
//   }

//   set code(code) {
//     this._code = code;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     this._name = name;
//   }

//   displayFullCurrency() {
//     return `${this.name} (${this.code})`;
//   }
// }
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
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
    this._name = c;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
