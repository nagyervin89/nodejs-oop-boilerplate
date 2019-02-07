var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:50000,localhost:50001/myproject';
// Use connect method to connect to the Server passing in
// additional options
MongoClient.connect(url, {
  poolSize: 10, ssl: true
}, function (err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});