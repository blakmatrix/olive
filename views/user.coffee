@title = 'OLIVE User'


div class:'user', ->
  div class:'page-header', ->
    h1 @title
  if "#{@user.first}"=="blah"
    h2 "#{@user.username}"
    ul class: 'unstyled', ->
      li ->
        label 'Username: '
        p "#{@user.username}&nbsp;"
      li ->
        label 'First Name: '
        p "#{@user.first}&nbsp;"
      li ->
        label 'Last Name: '
        p "#{@user.last}&nbsp;"
      li ->
        label 'Email: '
        p "#{@user.email}&nbsp;"
      li ->
        label 'Favorite Color: '
        p "#{@user.fav_color}&nbsp;"
      li ->
        label 'Birthday: '
        p "#{@user.dob}&nbsp;"
      li ->
        label 'Member Since: '
        p "#{@user.created_at}&nbsp;"
      li ->
        label 'Toggle: '
        p "#{@user.c_toggle}&nbsp;"
      li ->
        label 'Friends: '
        p "None&nbsp;"
  else
    p ->"Sorry no user by that name."