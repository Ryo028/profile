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
        console.log(user);
        if (user) {
          return $()(function() {
            $(window).load(function() {
              setTimeout(function() {
                window.location.href = 'index.html';
              }, 200 + Math.random() * 100);
            });
            return this;
          });
        } else {

        }
      });
    }

    LoginCtrl.prototype.getUserForm = function() {
      console.log('クリック');
      $()(function() {
        $('#newuser').on('click', function() {
          var email, password;
          console.log('クリック');
          email = $('#email').val();
          password = $('#password').val();
          console.log(email);
          userDao.userAdd(email, password);
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
