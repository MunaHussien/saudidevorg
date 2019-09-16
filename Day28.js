var number;
function positive(number) {
  if (number >= 0) document.write('The Number is positive');
  else throw alert('Number must not be negative');
}
positive(-1);
