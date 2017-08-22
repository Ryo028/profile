class Man
  constructor: (@name, @age) ->

  greet: (arg) ->
    console.log 'Hello I\'m ' + @name + "!";

h = new Man "Hosomichi", 30
h.greet()

