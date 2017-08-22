class @UserDao extends FireModel

    # 新規登録
    addUser: (email, password) ->
        firebase.auth().createUserWithEmailAndPassword email, password
        .catch (error) ->
            console.log error.message
    
    # ユーザがログインしているかどうかを確認
    loginCheck: (callback) ->
        setTimeout ->
            firebase.auth().onAuthStateChanged (user) ->
                callback user                
        , 200 + Math.random() * 100
        
    logout: (callback) ->
        setTimeout ->
            firebase.auth().signOut ->
                callback
        , 200 + Math.random() * 100
