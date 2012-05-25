doctype 5
html lang: 'en', ->
  head ->
    meta charset: 'utf-8'
    title "#{@title} | OLIVE" if @title?

    meta(name: 'description', content: @description) if @description?

    link rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lobster|Droid+Serif|Droid+Sans'
    link rel: 'stylesheet', href: '/css/style.css'
    link rel: 'stylesheet', href:'/css/colorpicker.css'
    script src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'
    script src: '/js/colorpicker.js'
    script src: '/socket.io/socket.io.js'
    script src: '/js/application.js'


  body ->

    header ->
    div class: 'topbar', ->
      div class: 'topbar-inner', ->
        div class: 'container',  ->
          h3 -> a href:'/', id:'home1', -> 'OLIVE'
          ul class: 'nav', ->
            li class:'active',  -> a  href:'/', id:'home', -> 'Home'
            li -> a id:'colorpicker', href:'/colorpicker', -> 'Color Picker'
            li -> a id:'about',       href:'/about',       -> 'About'



    a href: 'https://github.com/blakmatrix/olive', ->
      img style: 'z-index: 1000; position: absolute; top: 40px; right: 0; border: 0;', src: 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png', alt: 'Fork me on GitHub'
    div class: 'container', ->
      div id: 'content', ->
        @body

    div id:'footer', ->
      div class:'topbar-inner', ->
        div class:'container', ->
          h3 class:'right', ->
            a href: '#', style:'text-decorations: none;', -> 'I love OLIVE.'
          h3 ->
            a href:'https://github.com/blakmatrix', -> 'Designed by Farrin A. Reid'



