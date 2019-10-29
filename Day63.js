function testFunction(a, b) {
  return a * b;
}
var x = testFunction(4, 3);

(function f() {
  document.write('MY New Function ! I called myself' + '<br/>');
})();

var newFunction1 = function(a, b) {
  return a * b;
};
document.write(newFunction1(4, 3) + '<br/>');

var newFunction2 = new Function('a', 'b', 'return a * b');
document.write(newFunction2(4, 3));
