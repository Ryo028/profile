(function() {
  var Man, h;

  Man = (function() {
    function Man(name, age) {
      this.name = name;
      this.age = age;
    }

    Man.prototype.greet = function(arg) {
      return console.log('Hello I\'m ' + this.name + "!");
    };

    return Man;

  })();

  h = new Man("Hosomichi", 30);

  h.greet();

}).call(this);
