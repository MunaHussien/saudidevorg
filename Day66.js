function myFunction() {
  var a = 4; // local
  return a * a;
}

document.write(myFunction());

var a = 4; //global

function myFunction() {
  return a * a;
}

document.write(myFunction());
