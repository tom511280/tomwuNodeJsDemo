var express = require('express');
var router = express.Router();
var behaviorModel = require('../models/behaviorModel');

router.post('/insertBehavior', function (req, res, next) {
    behaviorModel.add(req, function (err, results) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        res.status(201);
        res.json({
            msg: "success"
        });
        console.log("insertBehavior success");
    });
  });

  module.exports = router;