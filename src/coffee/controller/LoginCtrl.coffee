class @LoginCtrl extends LoginModel
    
    constructor: () ->
        userDao = new UserDao
        # ユーザのログイン状態をチェック
        userDao.loginCheck (user) ->
            console.log user
            if user
                $() ->
                    $(window).load () ->
                        setTimeout () ->
                            window.location.href = 'index.html'
                            return
                        , 200 + Math.random() * 100
                        return
                    @
            else
                
            
    # 新規登録処理
    getUserForm: () ->
        console.log 'クリック'
        $() ->
            $('#newuser').on 'click', ->
                console.log 'クリック'
                email = $('#email').val()
                password = $('#password').val()
                console.log email
                userDao.userAdd email, password
                return
            @
        return
            
    # ログイン処理
    login: () ->
        $ () ->
            
            
        
        
loginCtrl = new LoginCtrl
loginCtrl.getUserForm()

#loginModel.newUserAdd email, password
