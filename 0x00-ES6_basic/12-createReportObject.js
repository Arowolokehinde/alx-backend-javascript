import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const obj = {
    employeesList() {
      const departments = Object.keys(employeesList);
      const result = {};
      for (const department of departments) {
        result[department] = createEmployeesObject(department, employeesList);
      }
      return result;
    },
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return obj;
}
