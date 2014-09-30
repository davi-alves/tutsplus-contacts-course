/*global require*/
(function() {
  'use strict';
  var express = require('express'),
    path = require('path'),
    api = require('./server/api'),
    app = express();

  app
    .use(express.static('./public'))
    .use('/api', api)
    .get('*', function(req, res) {
      // is recomended to use main so every file is send by express and not just staticly hosted
      res.sendFile('main.html', {
        root: path.join(__dirname, 'public')
      });
    })
    .listen(3000);
})();
