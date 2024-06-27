export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const iterable of array) {
    newArray.push(appendString + iterable);
  }

  return newArray;
}
