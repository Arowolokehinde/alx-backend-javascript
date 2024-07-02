/* eslint-disable quotes */
// export default function hasValuesFromArray(sets, arr) {
//   for (const elemet of arr) {
//     if (!sets.has(elemet)) {
//       return false;
//     }
//   }
//   return true;
// }
/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let elemt = true;
  list.map((x) => {
    if (!set.has(x)) {
      elemt = false;
    }
  });

  return elemt;
}
