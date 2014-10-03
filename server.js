/*global require*/
(function () {
  'use strict';
  var express = require('express'),
    path = require('path'),
    account = require('./server/account'),
    options = require('./server/options'),
    api = require('./server/api'),
    app = express();

  app
    .use(express.static('./public'))
    .use(account)
    .use(options)
    .use('/api', api)
    .get('*', function (req, res) {
      if (!req.user) {
        res.redirect('/login');
      } else {
        // is recomended to use main so every file is send by express and not just staticly hosted
        res.sendFile('main.html', {
          root: path.join(__dirname, 'public')
        });
      }

    })
    .listen(3000);
})();
