var user = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

var user1 = {
  firstName: 'Muna',
  lastName: 'Siraj'
};

var user2 = {
  firstName: 'Majed',
  lastName: 'Siraj'
};

document.write(user.fullName.call(user1));

var staff = {
  fullName: function(city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  }
};
var employee = {
  firstName: ' Muna',
  lastName: 'Siraj'
};

document.write(staff.fullName.call(employee, 'Riyadh', 'SA'));
