var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
document.write(x);

var nums = [5, 4, 3, 2, 1];
smallvalues = nums.filter(function(x) {
  return x < 3;
});
everyother = nums.filter(function(x, i) {
  return i % 2 == 0;
});
document.write(smallvalues);
document.write('<br>');
document.write(everyother);

var fivenumber = [1, 2, 3, 4, 5];
var y = fivenumber.every(function(x) {
  return x < 10;
});
var z = fivenumber.every(function(x) {
  return x % 2 === 0;
});
document.write(y);
document.write('<br>');
document.write(z);

var numbers = [175, 50, 25];
var leftToRight = numbers.reduce(function(total, num) {
  return total - num;
});
var RighToLeft = numbers.reduceRight(function(total, num) {
  return total - num;
});
document.write(leftToRight);
document.write('<br>');
document.write(RighToLeft);

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
var a = fruits.indexOf('Apple');
var b = fruits.lastIndexOf('Mango');
document.write(a);
document.write('<br>');
document.write(b);
