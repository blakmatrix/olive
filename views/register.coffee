@title = 'OLIVE Register'


div class:'register', ->
  div class:'page-header', ->
    h1 @title

  form class:'form-stacked', action: '/register', method: 'POST', ->
    ul class: 'unstyled', ->
      li id: 'login', ->
        label for: 'username', 'Login'
        input type: 'text', name: 'username'
      li id: 'password', ->
        label for: 'password', 'Password'
        input type: 'password', name: 'password'
      li id: 'email', ->
        label for: 'email', 'Email'
        input type: 'text', name: 'email'
      li id: 'first', ->
        label for: 'first', 'First Name'
        input type: 'text', name: 'first'
      li id: 'last', ->
        label for: 'last', 'Last Name'
        input type: 'text', name: 'last'
      li id: 'dob', ->
        label for: 'dob', 'Birthday'
        input id: 'datepicker', class: 'hasDatepicker', type: 'date', name: 'dob'
      input class:'btn primary', type: 'submit', value: 'Register'


