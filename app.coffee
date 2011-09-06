express = require 'express'
kup = require 'coffeekup'

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

app.configure 'development', ->
  app.use express.errorHandler { dumpExceptions: true, showStack: true }

app.configure 'production', ->
  app.use express.errorHandler()


# Routes

app.get '/', (req, res) ->
  res.render 'index'


app.listen 3000
console.log "Listening on port %d in %s mode...", app.address().port, app.settings.env
