var express = require('express');
var router = express.Router();
var mongoUtil = require('../util/mongoUtil');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/addUser', function (req, res, next) {
//   mongoUtil.mongoClient.connect(mongoUtil.mongoUrl, { useNewUrlParser: true }, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("TomDemoMongoDB");
//       var raccount = Math.random().toString(36).replace(/[^a-z]+/g, '');
//       var myobj = { 
//           account: raccount, 
//           password: "1234",
//           name: raccount,
//           email: raccount+"@gmail.com",
//           birthday: "2019-01-01",
//       };
//       dbo.collection("User").insertOne(myobj, function(err, res) {
//           if (err) throw err;
//           console.log("文档插入成功");
//           db.close();
//       });
//   });
  res.send('Hello World');
});

module.exports = router;
