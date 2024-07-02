/* eslint-disable quotes */
export default function hasValuesFromArray(sets, arr) {
  for (const elemet of arr) {
    if (!sets.has(elemet)) {
      return false;
    }
  }
  return true;
}
