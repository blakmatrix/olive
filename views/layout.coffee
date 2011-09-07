doctype 5
html lang: 'en', ->
  head ->
    meta charset: 'utf-8'
    title "#{@title} | OLIVE" if @title?

    meta(name: 'description', content: @description) if @description?

    link rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lobster|Droid+Serif|Droid+Sans'
    link rel: 'stylesheet', href: '/css/style.css'
    link rel: 'stylesheet', href:'/css/prettify.css'
    script src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'
    script src: '/js/prettify.js'
    script src: '/js/application.js'

  body ->

    header ->
    div class: 'topbar', ->
      div class: 'topbar-inner', ->
        div class: 'container',  ->
          h3 -> a href:'/', -> 'OLIVE'
          ul class: 'nav', ->
            li -> a href:'/', -> 'Home'
            li -> a href:'/colorpicker', -> 'Color Picker'
            li -> a href:'/users',       -> 'Users'
            li -> a href:'/about',       -> 'About'

          ul class: 'nav nav2',    ->
            li class: 'dropdown', ->
              a href:'#', id:'no-link',class: 'dropdown-toggle', -> 'Account'
              ul class: 'dropdown-menu',  ->
                li -> a href:'/login',   ->'Login'
                li -> a href:'/register',->'Register'
                li class:'divider'
                li -> a href:'/logout',  ->'Logout'



    div class: 'container', ->
      div id: 'content', ->
        @body

    footer ->
      div class:'inner', ->
        div class:'container', ->
          p class:'right', ->
            "I love OLIVE."
          p ->
            text 'Designed by '
            a href:'https://github.com/blakmatrix', -> 'Farrin A. Reid'
            br ->
            text 'Fork '
            a href:'https://github.com/blakmatrix/olive', ->'OLIVE'
            text ' on github!'


