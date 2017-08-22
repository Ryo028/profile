(function() {
  var loginCtrl,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.LoginCtrl = (function(superClass) {
    extend(LoginCtrl, superClass);

    function LoginCtrl() {
      var userDao;
      userDao = new UserDao;
      userDao.loginCheck(function(user) {
        return console.log(user);
      });
    }

    LoginCtrl.prototype.login = function() {
      return $(function() {
        $('#newuser').on('click', function() {
          var email, password;
          email = $('#email').val();
          password = $('#password').val();
          console.log(email);
        });
        return this;
      });
    };

    return LoginCtrl;

  })(LoginModel);

  loginCtrl = new LoginCtrl;

}).call(this);
