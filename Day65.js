var employee = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
var employee1 = {
  firstName: 'Mary',
  lastName: 'Doe'
};
employee.fullName.apply(employee1);

var employee = {
  fullName: function(city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  }
};
var employee1 = {
  firstName: 'John',
  lastName: 'Doe'
};
employee.fullName.apply(employee1, ['Jeddah', 'KSA']);
