var student = {
  firstName: 'Ahmed',
  lastName: 'Ali',
  age: 35,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

document.write(student.fullName());
