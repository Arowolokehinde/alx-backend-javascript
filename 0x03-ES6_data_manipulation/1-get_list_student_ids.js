/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */

export default function getListStudentIds(i) {
  if (!Array.isArray(i)) {
    return [];
  }
  const arr = [];
  for (const student of i) {
    arr.push(student.id);
  }
  return arr;
  // or
  // return i.map((student1) => student1.id);
  // console.log(myMap.get(id));
}
