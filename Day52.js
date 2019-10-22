var multi = new Array(5);
for (var x = 0; x < multi.length; x++) {
  multi[x] = new Array(3);
}

for (var row = 0; row < multi.length; row++) {
  for (var col = 0; col < multi[row].length; col++) {
    multi[row][col] = row * col;
  }
}

document.write(multi);
