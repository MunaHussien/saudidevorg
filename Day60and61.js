var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];
function comparing(first, second) {
  var location = 0;

  for (var i = 0; i < first.length; i++) {
    if (first[i] != second[i]) {
      location = i;
    }
  }
  return location;
}
var result = comparing(first, second);
document.write(result);
