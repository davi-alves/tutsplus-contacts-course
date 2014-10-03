/*global require,module*/
(function () {
  var express = require('express'),
    bodyParser = require('body-parser'),
    Bourne = require('bourne');

  var router = express.Router(),
    db = new Bourne('./data/user.json');

  router
    .use(bodyParser.json())
    .get('/options/displayed_fields', function (req, res) {
      if (!req.user) {
        res.json([]);
      } else {
        res.json(req.user.options.displayed_fields || []);
      }
    })
    .post('/options/displayed_fields', function (req, res) {
      if (!req.user) {
        res.json([]);
      } else {
        req.user.options.displayed_fields = req.body.fields;
        db.update({
          id: req.user.id
        }, req.user, function (err, data) {
          res.json(data[0].options.displayed_fields);
        });
      }
    });

  module.exports = router;
})();
