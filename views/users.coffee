 @title = 'OLIVE User'


div class:'users', ->
  h1 @title
  if @users
    ul
      for user in @users
        li -> a href='/#{user.username}', -> '#{user.username}'
