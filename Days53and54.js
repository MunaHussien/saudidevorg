var EmpName = [];
var JobRole = [];
var Experience = [];

for (var y = 0; y < 6; y++) {
  var name = prompt('kindly enter employee name ');
  EmpName.push(name);
}
alert(EmpName);
document.write(EmpName);
for (var j = 0; j < 6; j++) {
  var role = prompt('kindly enter employee job role ');
  JobRole.push(role);
}
alert(JobRole);
document.write(JobRole);
for (var i = 0; i < 6; i++) {
  var years = Number(prompt('kindly enter employee experience '));
  Experience.push(years);
}
alert(Experience);
document.write(Experience);

var EmpData = [6][3];
for (x = 0; x < EmpData.length; x++) {
  for (z = 0; z < EmpData[x].length; z++) {
    EmpData.push(EmpName[x], JobRole[x], Experience[x]);
  }
}

document.write(EmpData);

//////////////////////////////////////////////////////////////

for (var i = 0; i < Experience.length; i++) {
  var year = Number(prompt('year to check'));
  if (Experience[i] > 3) {
    document.write(Experience[i]);
  }
}

///////////////////////////////////
var EmployeesData = [
  ['Ahmed', 'Programmer', '6'],
  ['Saad', 'Engineer', '3'],
  ['Omer', 'Accountant', '1'],
  ['Mohamed', 'CEO', '5'],
  ['Rami', 'Programmer', '2'],
  ['Salem', 'Analyst', '8']
];
for (x = 0; x < EmployeesData.length; x++) {
  for (z = 0; z < EmployeesData[x].length; z++) {
    if (EmployeesData[x][z] == 'Saad') {
      delete EmployeesData[x][z];
      delete EmployeesData[x][z + 1];
      delete EmployeesData[x][z + (1 + 1)];
    }
  }
}
document.write(EmployeesData);
