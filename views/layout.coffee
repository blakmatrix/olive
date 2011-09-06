doctype 5
html lang: 'en', ->
  head ->
    meta charset: 'utf-8'
    title "#{@title} | Koteako" if @title?

    meta(name: 'description', content: @description) if @description?

    link rel: 'stylesheet', href: '/css/style.css'

  body ->
    header ->
      nav ->

    div id: 'content', ->
      @body

    footer ->
      p -> a href: '/privacy', -> 'Privacy Policy'

    script src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'

