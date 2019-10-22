var colors = ['red', 'yellow', 'green', 'blue', 'black'];
colors.toString();
document.write(colors + '<br>');

function myFunction(item, index) {
  document.write(index + ' : ' + item + '<br>');
}

colors.forEach(myFunction);
