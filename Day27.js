function counter(a, b) {
  for (var count = 0; count < 6; count++) {
    if (count == a) {
      document.write(count + 'A<br>'); 
    } else if (count == b) {
      document.write(count + 'B<br>');
    }
  }
  return a + b;
}
document.write(counter(3, 4));
