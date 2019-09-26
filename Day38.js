var user = {
  firstName: 'Majed',
  lasName: 'mohamed',
  language: 'en',
  get lagGet() {
    return this.language;
  },
  set langSet(value) {
    this.language = value;
  }
};
document.getElementById('demo1').innerHTML = user.lagGet;
user.langSet = 'ar';
document.getElementById('demo2').innerHTML = user.lagGet;
