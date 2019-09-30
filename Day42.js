function user(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

user.prototype.nationality = 'Canadian';

var person = new user('Mohammed', 'Hussien', 50, 'Black');
document.write(
  'The name and nationality of the person is ' +
    person.firstName +
    ' ,He is a  ' +
    person.nationality
);
