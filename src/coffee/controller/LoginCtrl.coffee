class @LoginCtrl extends LoginModel
    
    constructor: () ->
        userDao = new UserDao
        userDao.loginCheck (user) ->
            console.log user            
            
    login: () ->
        $ () ->
            $('#newuser').on 'click', ->
                email = $('#email').val()
                password = $('#password').val()
                console.log email
                return
            @
                    
loginCtrl = new LoginCtrl

#loginModel.newUserAdd email, password
