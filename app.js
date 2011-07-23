
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer()
   , io = require('socket.io').listen(app);


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
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
var g_color = '808000';
// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'OLIVE',
    g_color: "body{background-color:#"+g_color+";}"
  });
});

app.get('/login', function(req, res){
  res.render('login', {
    title: 'OLIVE login',
    g_color: "body{background-color:#"+g_color+";}"
  });
});

app.get('/colorpicker', function(req, res){
  res.render('colorpicker', {
    title: 'OLIVE color picker',
    g_color: "body{background-color:#"+g_color+";}"
  });
});

// Model
var bcs = [{hex_val: "808000", color_name: "OLIVE (web color)"},
           {hex_val: "ADFF2F", color_name: "Green-Yellow"},
           {hex_val: "7CFC00", color_name: "Lawn Green"},
           {hex_val: "93C572", color_name: "Pistachio"},
           {hex_val: "9ACD32", color_name: "Yellow-Green"},
           {hex_val: "8DB600", color_name: "Apple Green"},
           {hex_val: "9AB973", color_name: "Olive Green"},
           {hex_val: "808000", color_name: "Olive"},
           {hex_val: "6B8E23", color_name: "Olive Drab"},
           {hex_val: "78866B", color_name: "Camouflage Green"},
           {hex_val: "556B2F", color_name: "Dark Olive Green"}
];
//var users = require('./users');
//var USERS = users.USERS;
//var User = users.User;

// IO


// listen

app.listen(3838);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
//IO

io.sockets.on('connection', function (socket) {

  socket.emit('color_change', { color: g_color });
  socket.on('set_color', function (data) {
    console.log(data);
    g_color=data.change_color;
    socket.broadcast.emit('update_color', { color: data.change_color });
  });
});
