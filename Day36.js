var student = {
  fisrtName: 'sara',
  lastName: 'saad',
  age: 25,
  fullName: function() {
    return this.fisrtName + ' ' + this.lastName;
  }
};

document.write(student.fisrtName + '<br>');
delete student.fisrtName;
document.write(student.fisrtName + '<br>');
