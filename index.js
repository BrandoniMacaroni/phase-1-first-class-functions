function receivesAFunction(callback) {
    var myQuote = "I understand";
    callback(myQuote);
  }

function returnsANamedFunction() {
    return function named() {
    };
}

function returnsAnAnonymousFunction()  {
    
    return function() {}
};
  