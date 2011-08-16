
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    MongoStore = require('connect-mongo'),
    Schema = mongoose.Schema;


var app = module.exports = express.createServer();
app.dynamicHelpers(require('./helpers.js').dynamicHelpers);
var io = require('socket.io').listen(app);


// Configuration
var db_olive = mongoose.connect('mongodb://localhost/olive');


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: 'evilO',
    store: new MongoStore({
                            db: 'olive'
    })
  }));
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  //app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});




var g_color = '808000';

var Root        = require('./controllers/root'),
    Username    = require('./controllers/username'),
    UsersList   = require('./controllers/users'),
    Login       = require('./controllers/login'),
    Register    = require('./controllers/register'),
    Logout      = require('./controllers/logout'),
    Colorpicker = require('./controllers/colorpicker');

// Routes
app.all('/*?', function(req, res, next){
  req.g_color = g_color;
  if (req.g_color) {
    next();
  } else {
    next(req.flash('error','Unable to set req.g_color'));
  }
});
  
app.get('/', Root.index);

app.get('/users', UsersList.index);

app.get('/login', Login.index);
app.post('/login', Login.login);

app.get('/logout', Logout.index);

app.get('/register', Register.index);
app.post('/register', Register.register);

app.get('/colorpicker', Colorpicker.index);

app.get('/:id?', Username.index);


// IO

io.sockets.on('connection', function (socket) {

  socket.emit('color_change', { color: g_color });
  socket.on('set_color', function (data) {
    console.log(data);
    g_color=data.change_color;
    socket.broadcast.emit('update_color', { color: data.change_color });
  });
});
// Error Handling

//process.on('uncaughtException', function(e) {
//    sys.log(e.stack);
//});

//process.on('SIGINT', function() {
//    if (socket) socket.broadcast({ type: 'restart' });
//    setTimeout(function() {
//        process.exit();
//    }, 2000);
//});

// listen
app.listen(3838);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

