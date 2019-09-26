var employee = {
  firstName: 'Mohamed',
  lastName: 'Ali',
  age: 30,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

document.write(employee.hasOwnPeroperty('firstName'));
document.writeln(employee.propertyIsEnumerable('firstName'));
