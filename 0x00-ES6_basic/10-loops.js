export default function appendToEachArrayValue(array, appendString) {
  for (const iterable of array) {
    const index = array.indexOf(iterable);
    array[index] = appendString + iterable;
  }

  return array;
}
