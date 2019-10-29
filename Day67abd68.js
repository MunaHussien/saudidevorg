var fibonacci = (function() {
  //create Function
  var memo = {}; /// create a varible as object

  function f(n) {
    // create inner function
    var value; // create a varible for counting

    if (n in memo) {
      // create condition
      value = memo[n]; // add value to obj
    } else {
      //chech value
      if (n === 0 || n === 1)
        // in cases 0 and 1
        value = n;
      // value will be n
      else value = f(n - 1) + f(n - 2); /// in case greater values function will run

      memo[n] = value; //add result in obj
    }

    return value; // return value
  }

  return f; // returen function
})();

///////https://www.sitepoint.com/implementing-memoization-in-javascript/
