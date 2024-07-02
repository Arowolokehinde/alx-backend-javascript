// export default function getStudentIdsSum(arr) {
//   return arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.id,
//     0
//   );
// }
export default function getStudentIdsSum(list) {
  return list.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0
  );
}
