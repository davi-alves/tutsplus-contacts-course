/*global require,Bourne,console,module*/
(function () {
  'use strict';

  var express = require('express'),
    Bourne = require('bourne'), // local json storage
    bodyParser = require('body-parser'), // parse request body

    db = new Bourne('./data/data.json'),
    router = express.Router();

  router
    .use(function (req, res, next) {
      // temorary workaround to moke user authentication
      if (!req.user) {
        req.user = {
          id: 1
        };
      }

      next();
    })
    .use(bodyParser.json())
  // contacts route
  .route('/contacts')
    .get(function (req, res) { // GET /contacts
      db.find({
          userId: parseInt(req.user.id, 30)
        },
        function (err, data) {
          res.json(data);
        });
    })
    .post(function (req, res) { // POST /contacts
      var contact = req.body;
      contact.userId = req.user.id;

      db.insert(contact, function (err, data) {
        res.json(data);
      });
    });

  router
    .param('id', function (req, res, next) {
      req.dbQuery = {
        id: parseInt(req.params.id, 10)
      };
      next();
    })
  // contacts sub route (:id)
  .route('/contacts/:id')
    .get(function (req, res) { // get contact
      db.findOne(req.dbQuery, function (err, data) {
        res.json(data);
      });
    })
    .put(function (req, res) { // update contact
      var contact = req.body;
      // angularjs stuff
      delete contact.$promise;
      delete contact.$resolved;
      db.update(req.dbQuery, contact, function (err, data) {
        res.json(data[0]); // return the first updated item (it's expected to be only one)
      });
    })
    .delete(function (req, res) {
      db.delete(req.dbQuery, function (err, data) {
        res.json(null);
      });
    });

  module.exports = router;
})();
