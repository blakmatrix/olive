@title = 'OLIVE Login'


div class:'login', ->
  h1 @title

  form action: '/login', method: 'POST', ->
    ul ->
      li id: 'username', ->
        label for: 'username', 'Username'
        input type: 'text', name: 'username'
      li id: 'password', ->
        label for: 'password', 'Password'
        input type: 'password', name: 'password'
      input type: 'submit', value:'Login'

