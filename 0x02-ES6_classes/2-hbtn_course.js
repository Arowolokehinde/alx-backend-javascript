/* eslint-disable-next-line no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an Array of students');
    }

    // set the Attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (!Number.isInteger(length)) {
      throw new TypeError('length must be an integer');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    this._students = students;
  }
}
