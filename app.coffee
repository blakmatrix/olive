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

app.get '/', (req, res) ->
  res.render 'index'

app.get '/login', (req, res) ->
  res.render 'login'

app.post '/login', (req, res) ->
  res.redirect('/')

app.get '/register', (req, res) ->
  res.render 'register'

app.post '/register', (req, res) ->
  res.redirect('/')

app.get '/users', (req, res) ->
  res.render 'users'

app.get '/colorpicker', (req, res) ->
  res.render 'colorpicker'

app.get '/u/:id?', (req, res,next) ->
  res.render 'user',
    user:
      username: req.params.id
      first: 'blah'

app.get '/about', (req, res) ->
  res.render 'about'

app.get '/logout', (req, res, next) ->
  res.redirect('/')

app.listen process.env.PORT || 3000
console.log "Listening on port %d in %s mode...", app.address().port, app.settings.env
