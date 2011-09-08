@title = 'OLIVE Login'


div class:'login', ->
  div class:'page-header', ->
    h1 @title

  form class:'form-stacked', action: '/login', method: 'POST', ->
    ul class: 'unstyled', ->
      li id: 'username', ->
        label for: 'username', 'Username'
        input type: 'text', name: 'username'
      li id: 'password', ->
        label for: 'password', 'Password'
        input type: 'password', name: 'password'
      input type: 'submit', value:'Login', class:'btn primary'

