var results = [5];
function studentGPA(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    results = document.write(
      'Student Name ' + array1[i] + 'and his GPA is ' + array2[i] + '<br/>'
    );
  }
  return results;
}
var students = ['Aymen', 'Majed', 'Hani', 'Sami', 'Saad'];
var GPAs = [4.99, 4.8, 4.71, 4.78, 4.6];

studentGPA(students, GPAs);
