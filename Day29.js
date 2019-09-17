var number;
function checkNumber(number) {
  if (numbre >= 0) {
    document.write('The Number is positive');
  } else throw 'Wrong Enter, Number is negative';
}
try {
  var num1 = Number(prompt('Please enter a psitive number'));
  positive(num1);
  alert(num1 + 'is positive');
} catch (msg) {
  alert(msg);
} finally {
  alert('Finally , I got it');
}
