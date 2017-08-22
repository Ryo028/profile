(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.UserDao = (function(superClass) {
    extend(UserDao, superClass);

    function UserDao() {
      return UserDao.__super__.constructor.apply(this, arguments);
    }

    UserDao.prototype.addUser = function(email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)["catch"](function(error) {
        return console.log(error.message);
      });
    };

    UserDao.prototype.loginCheck = function(callback) {
      return setTimeout(function() {
        return firebase.auth().onAuthStateChanged(function(user) {
          return callback(user);
        });
      }, 200 + Math.random() * 100);
    };

    return UserDao;

  })(FireModel);

}).call(this);
