var colors = ['red', 'yellow', 'green', 'blue', 'black'];
document.write(colors.splice(1, 2, 'purple', 'white') + '<br>');
colors.push('gray');
document.write(colors + '<br>');

colors.pop();
document.write(colors + '<br>');
colors.unshift('lightgray');
document.write(colors + '<br>');
colors.shift();
document.write(colors + '<br>');
