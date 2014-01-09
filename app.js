var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , api = require('./util/api')
  , helper = require('./util/helper');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.favicon('/public/img/favicon.ico'));

app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.session({secret: 'farts'}));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('layout', __dirname + '/views/layout');
app.set('view engine', 'hogan');
//app.enable('view cache');
app.engine('hogan', require('hogan-express'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var mainWare = [
  routes.index
];

//pages that are viewable
app.get('/', mainWare);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//TODO
