// CC 6

//task 1

const employees = [
  { 
      name: 'John', 
      shifts: [
          { day: 'Monday', hours: 8 }, 
          { day: 'Wednesday', hours: 6 }
      ] 
  },
  { 
      name: 'Sara', 
      shifts: [
          { day: 'Tuesday', hours: 5 }, 
          { day: 'Thursday', hours: 7 }
      ] 
  },
  { 
      name: 'David', 
      shifts: [
          { day: 'Monday', hours: 8 }
      ] 
  },
  { 
      name: 'Emily', 
      shifts: [
          { day: 'Friday', hours: 8 }
      ] 
  }
];

//task 2

function displayEmployeeShifts(employee) {
  console.log("Employe Name: " + employee.name);
  console.log("Assigned Shifts:");
  employee.shifts.forEach(function(shift) {
      console.log("Day: " + shift.day + ", Hours: " + shift.hours);
  });
}

//task 3

function assignShift(employeeName, day, hours) {
    let employee = employees.find(function(emp) {
        return emp.name === employeeName;
    });

    if (!employee) {
        console.log("Employee not found.");
        return;
    }

    let shiftExists = employee.shifts.some(function(shift) {
        return shift.day === day;
    });

    if (shiftExists) {
        console.log("Errr: " + employeeName + " already has a shift on " + day);
    } else {
        employee.shifts.push({ day: day, hours: hours });
        console.log("Shift assigned to " + employeeName + " on " + day);
    }
}

//task 4

function calculateTotalHours(employeeName) {
  let employee = employees.find(function(emp) {
      return emp.name === employeeName;
  });

  if (!employee) {
      console.log("Employee not found");
      return;
  }

  let totalHours = employee.shifts.reduce(function(total, shift) {
      return total + shift.hours;
  }, 0);

  console.log(employeeName + " has worked a total of " + totalHours + " hours this week.");
}

//task 5


function listAvailableEmployees(day) {
  console.log("Employees available on " + day + ":");
  employees.forEach(function(employee) {
      let isWorking = employee.shifts.some(function(shift) {
          return shift.day === day;
      });

      if (!isWorking) {
          console.log(employee.name);
      }
  });
}

//test functions

displayEmployeeShifts(employees[0]);
assignShift('Emily', 'Monday', 6);    
calculateTotalHours('Sara');          
listAvailableEmployees('Tuesday');    