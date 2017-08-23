(function() {
  var loginCtrl,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.LoginCtrl = (function(superClass) {
    var userDao;

    extend(LoginCtrl, superClass);

    userDao = new UserDao;

    function LoginCtrl() {
      userDao.loginCheck(function(user) {
        console.log(user);
        if (user) {
          return $(function() {
            window.location.href = "index.html";
          });
        } else {

        }
      });
    }

    LoginCtrl.prototype.getUserForm = function() {
      console.log('クリック');
      $(function() {
        $('#newuser').on('click', function() {
          var email, password;
          console.log('クリック');
          email = $('#email').val();
          password = $('#password').val();
          console.log(email);
          userDao.addUser(email, password);
        });
        return this;
      });
    };

    LoginCtrl.prototype.login = function() {
      return $(function() {});
    };

    return LoginCtrl;

  })(LoginModel);

  loginCtrl = new LoginCtrl;

  loginCtrl.getUserForm();

}).call(this);
