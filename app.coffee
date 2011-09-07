express = require 'express'
kup = require 'coffeekup'
url = require 'url'

app = module.exports = express.createServer()


# Configuration

app.configure ->
  app.set 'view engine', 'coffee'
  app.register '.coffee', kup.adapters.express
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use express.compiler { src: __dirname + '/public', enable: ['less'] }
  app.use app.router
  app.use express.static(__dirname + '/public')
  app.use express.favicon(__dirname + '/public/favicon.ico')

app.configure 'development', ->
  app.use express.errorHandler { dumpExceptions: true, showStack: true }

app.configure 'production', ->
  app.use express.errorHandler()


# Routes

app.get '/.:format?', (req, res) ->
  if req.params.format == "json"
    res.render 'index', layout: false
  else
    res.render 'index'

app.get '/login.:format?', (req, res) ->
  if req.params.format == "json"
    res.render 'login', layout: false
  else
    res.render 'login'

app.post '/login.:format?', (req, res) ->
  res.redirect('/')

app.get '/register.:format?', (req, res) ->
  if req.params.format == "json"
    res.render 'register', layout: false
  else
    res.render 'register'

app.post '/register.:format?', (req, res) ->
  res.redirect('/')

app.get '/users.:format?', (req, res) ->
  if req.params.format == "json"
    res.render 'users', layout: false
  else
    res.render 'users'

app.get '/colorpicker.:format?', (req, res) ->
  if req.params.format == "json"
    res.render 'colorpicker', layout: false
  else
    res.render 'colorpicker'

app.get '/u/:id?.:format?', (req, res,next) ->
  if req.params.format == "json"
    res.render 'user', layout: false,
    user:
      username: req.params.id
      first: 'blah'
  else
    res.render 'user',
    user:
      username: req.params.id
      first: 'blah'

app.get '/about.:format?', (req, res) ->
  if req.params.format == "json"
    res.render 'about', layout: false
  else
    res.render 'about'

app.get '/logout.:format?', (req, res, next) ->
  res.redirect('/')

app.listen process.env.PORT || 3000
console.log "Listening on port %d in %s mode...", app.address().port, app.settings.env
