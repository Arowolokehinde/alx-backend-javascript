/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */

export default function getListStudentIds(i) {
  if (!Array.isArray(i)) {
    return [];
  }
  return i.map((student1) => student1.id);
}
