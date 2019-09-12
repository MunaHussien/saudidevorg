var num = 0;
var sum = 0;
while (num < 5) {
  num++;
  if (num == 3) {
    continue;
  }
  sum += num;
  document.write('Number = ' + num + ' Sum = ' + sum + '<br>');
}
//// Labe and Condition
var i = 0;
var j = 10;
checkiandj: while (i < 4) {
  document.write(' ' + i + ' ');
  i += 1;
  checkj: while (j > 4) {
    document.write(' ' + j + ' ');
    j -= 1;
    if (j % 2 == 0) {
      continue checkj; //back to this point in case condition is ok
    }
    document.write(j + ' is odd ');
  }
  document.write(' i = ' + i);
  document.write(' j = ' + j);
}
