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


    a href: 'https://github.com/blakmatrix/olive', ->
      img style: 'position: absolute; top: 0; left: 0; border: 0; z-index:10001', src: 'https://a248.e.akamai.net/assets.github.com/img/5d21241b64dc708fcbb701f68f72f41e9f1fadd6/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67', alt: 'Fork me on GitHub'
    div class: 'container', ->
      div id: 'content', ->
        @body

    div id:'footer', ->
      div class:'topbar-inner', ->
        div class:'container', ->
          h3 class:'right', ->
            "I love OLIVE."
          h3 ->
            a href:'https://github.com/blakmatrix', -> 'Designed by Farrin A. Reid'



