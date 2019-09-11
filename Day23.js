var x = 0;
var z = 0;
10;
labelCancelLoops: while (true) {
  document.write('Outer loops(x): ' + x + ' ');
  x += 1;
  z = 1;
  while (true) {
    document.write('Inner loops(z): ' + z + '<br>');
    z += 1;
    if (z === 3 && x === 3) {
      break labelCancelLoops;
    } else if (z === 3) {
      break;
    }
  }
}
