function user(id, FirstName, LastName) {
  this.id = id;
  this.FirstName = FirstName;
  this.LastName = LastName;
}

var student1 = new user(101, 'Mohammed', 'Ali');

var student2 = new user(102, 'Fahed', 'Saad');

document.write(
  student1.id +
    ' ' +
    student1.FirstName +
    ' ' +
    student1.LastName +
    ' ' +
    student2.id +
    ' ' +
    student2.FirstName +
    ' ' +
    student2.LastName
);
