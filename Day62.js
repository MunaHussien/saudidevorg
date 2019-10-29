function printprops(o) {
  for (var p = 0; p < o; p++) {
    document.write('p = ' + p + '<br>');
  }
}
printprops(5);

function distance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
document.write(distance(2, 4, 6, 8));

function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
document.write(hypotenuse(3, 4));
