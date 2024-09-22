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
  console.log("Employee Name: " + employee.name);
  console.log("Assigned Shifts:");
  employee.shifts.forEach(function(shift) {
      console.log("Day: " + shift.day + ", Hours: " + shift.hours);
  });
}


