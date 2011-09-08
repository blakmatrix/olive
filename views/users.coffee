@title = 'OLIVE Users'


div class:'users', ->
  div class:'page-header', ->
    h1 @title
  if @users
    ul class: 'unstyled', ->
      for user in @users
        li -> a href='/#{user.username}', -> '#{user.username}'
