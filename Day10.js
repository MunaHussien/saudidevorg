var oldDate = new Date(2017, 0, 10);
var oldDatewithTime = new Date(2018, 0, 1, 20, 10, 30);
var dateToday = new Date();

document.writeln(oldDate);
document.writeln(oldDatewithTime);
document.writeln(dateToday);
document.writeln(oldDatewithTime.getFullYear());
document.writeln(dateToday.getFullYear());
document.writeln(oldDatewithTime.getMonth());
document.writeln(dateToday.getDay());
document.writeln(oldDatewithTime.getHours());
document.writeln(oldDate.toString());
