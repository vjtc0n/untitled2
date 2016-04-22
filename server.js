var express = require('express');
var app = express();

var middleware = {
  requireAuthentication: function (req, res, next) {
      console.log('private');
      next();
  },
  logger: function (req, res, next) {
      console.log(req.method + ' ' + req.originalUrl + ' ' + new Date());
      next();
  }
};
app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/', middleware.requireAuthentication, function (res, res) {
   res.send('Hello Express !');
});


app.get('/about', function (req,res) {
   res.send('About us');
});

app.use(express.static(__dirname + 'public'));

//console.log(__dirname);


app.listen(3000);