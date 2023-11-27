/**
 * Iterating through report objects
 * */

export default function createIteratorObject(report) {
  const { allEmployees } = report;

  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex < allEmployees[departments[currentDepartmentIndex]].length) {
        const result = {
          value: allEmployees[departments[currentDepartmentIndex]][currentEmployeeIndex],
          done: false,
        };
        currentEmployeeIndex++;
        return result;
      }
      currentEmployeeIndex = 0;
      currentDepartmentIndex++;

      if (currentDepartmentIndex < departments.length) {
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
