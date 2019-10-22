var colors = ['red', 'yellow', 'green', 'blue', 'black'];
document.write(colors.join());
document.write(colors.reverse());
document.write(colors.sort());

//////////////////

var colorsA = ['red', 'blue'];
var colorsB = ['white', 'black'];
document.write('<br>' + colorsA.concat(colorsB) + '<br>');

///////////////////////////////

document.write(colors.slice(1, 3) + '<br>');
document.write(colors.slice(-2) + '<br>');
//document.write(colors.slice(-3, 1)+'<br>');
document.write(colors.slice(1, -1) + '<br>');
