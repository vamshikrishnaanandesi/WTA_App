var mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@cluster0-xdpxm.mongodb.net/test');
// const dbURI = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-xdpxm.mongodb.net/test?retryWrites=true";

// const options = {
//     reconnectTries: Number.MAX_VALUE,
//     poolSize: 10
//   };

// mongoose.connect(dbURI, options).then(
//     () => {
//       console.log("Database connection established!");
//     },
//     err => {
//       console.log("Error connecting Database instance due to: ", err);
//     }
//   );

//   var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-xdpxm.mongodb.net/ApplicationForm";
// mongoose.connect(uri, function(err, client) {
//    const collection = client.db("Application").collection("ApplicationForm");
//    // perform actions on the collection object
//    client.close();
// });

var uri = 'mongodb://localhost:27017/users';

mongoose.connect(uri);
// var db = mongoose.connection;



