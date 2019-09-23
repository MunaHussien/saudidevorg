var funTest = {
  prop: 44,
  func: function() {
    return this.prop;
  }
};
var num = 33;
document.write(funTest.func() + '<br>');
document.write(this === window);
document.write('<br>' + window.num);
