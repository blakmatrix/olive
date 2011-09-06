doctype 5
html lang: 'en', ->
  head ->
    meta charset: 'utf-8'
    title "#{@title} | OLIVE" if @title?

    meta(name: 'description', content: @description) if @description?

    link rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lobster|Droid+Serif|Droid+Sans'
    link rel: 'stylesheet/less', type: 'text/css', href: '/lib/bootstrap.less'
    script src: 'less.js', type: 'text/javascript'

  body ->
    header ->
    div class: 'topbar', ->
      div class: 'topbar-inner', ->
        div class: 'container',  ->
          h3 -> a href:'#', -> 'OLIVE'
          ul class: 'nav', ->
            li -> a href:'#colorpicker', -> 'Color Picker'
            li -> a href:'#users',       -> 'Users'
            li -> a href:'#about',       -> 'About'
            li class: 'account open',    ->
              a href:'#', class: 'account-toggle', -> 'Account'
              ul class: 'account-menu',  ->
                li -> a href:'#login',   ->'Login'
                li -> a href:'#register',->'Register'
                li class:'divider'
                li -> a href:'#logout',  ->'Logout'
    

    div class: 'container', ->
      @body

    footer ->
      
    script src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'

