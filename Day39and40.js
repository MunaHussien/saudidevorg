///object that has props
var ObjectTeacher = {
  Subject: 'Math',
  CoordinatorName: 'Mohamed',
  NoOfHours: 5,
  NoOfStudents: 30,
  get getSubject() {
    return this.Subject;
  },
  set setSubject(value) {
    this.Subject = value;
  }
};
//function with props
function FunctionPro(Subject, CoordinatorName, NoOfHours, NoOfStudents) {
  this.Subject = Subject;
  this.CoordinatorName = CoordinatorName;
  this.NoOfHours = NoOfHours;
  this.NoOfStudents = NoOfStudents;
}

var teacher1 = new FunctionPro('Math', 'Mohamed', 4, 30);
var teacher2 = new FunctionPro('English', 'Muna', 5, 50);
// I like the object creation is better for me ^^ , thank you :) for asking.

document.write(teacher1.CoordinatorName);
document.write(teacher2.NoOfStudents);
ObjectTeacher.setSubject = 'Programming';
document.write(ObjectTeacher.getSubject);
