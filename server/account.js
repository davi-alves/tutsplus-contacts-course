/*global require,module*/
(function () {
  var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    Bourne = require('bourne'),
    crypto = require('crypto');

  var router = express.Router(),
    db = new Bourne('./data/user.json');

  function hash(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  router
    .use(bodyParser.urlencoded())
    .use(bodyParser.json())
    .use(session({
      secret: 'ank54l23kkn6543knry5l3lm4564kn'
    }))
    .get('/login', function (req, res) {
      res.sendFile('login.html', {
        root: path.join(__dirname, '../public')
      });
    })
    .post('/login', function (req, res) {
      var user = {
        username: req.body.username,
        password: hash(req.body.password)
      };

      db.findOne(user, function (err, data) {
        if (data) {
          req.session.userId = data.id;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      });
    })
    .post('/register', function (req, res) {
      var user = {
        username: req.body.username,
        password: hash(req.body.password),
        options: {}
      };
      console.log(user);

      // tries to find if the user already exists
      db.find({
        username: user.username
      }, function (err, data) {
        // if not, insert
        if (!data.length) {
          db.insert(user, function (err, data) {
            console.log(data);
            req.session.userId = data.id;
            res.redirect('/');
          });
        } else {
          // otherwise, redirect to login
          res.redirect('/login');
        }
      });
    })
    .get('/logout', function (req, res) {
      req.session.userId = null;
      res.redirect('/');
    })
    .use(function (req, res, next) {
      if (req.session.userId) {
        db.findOne({
          id: req.session.userId
        }, function (err, data) {
          req.user = data;
        });
      }

      next();
    });

  module.exports = router;
})();
