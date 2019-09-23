
var mongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb+srv://tomwu:80005458@tomwudemocluster-cyhzg.mongodb.net/test?retryWrites=true&w=majority";
var _db;

module.exports = {
  connectToServer: function( callback ) {
    mongoClient.connect( mongoUrl,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('TomDemoMongoDB');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};