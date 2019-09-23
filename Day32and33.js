var numberEntered;
var number = 2;
var result = 0;
function division(numberEntered) {
  if (numberEntered !== 0) {
    result = number / numberEntered;
  } else {
    throw alert('error zero not accepted');
  }
  return result;
}
try {
  var userNumber = Number(prompt('kindly enter new number'));
  alert('your number is ' + userNumber);
  division(userNumber);
} catch {
  alert('cannot divide by Zero');
} finally {
  alert('Function is done');
}
