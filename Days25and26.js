var item,
  numbers = 10;
var odd = 0;
var even = 0;
for (item = 1; item <= numbers; item++) {
  checkEvenNumber: while (even < 8) {
    if (even % 2 == 0) {
      document.writeln('Even Number Less than 8 is = ' + even + '<br>');
    }
    even++;
    break;
  }

  checkOddNumber: while (odd < 7) {
    if (odd % 2 !== 0) {
      document.writeln('Odd Number Less than 7 is = ' + odd + '<br>');
    }
    odd++;
    continue;
  }
}
