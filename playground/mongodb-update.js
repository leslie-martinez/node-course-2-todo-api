//Object destructuring - ES6 Javascript
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c1ca8de3a68729a4e9f14fe')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users')
    .findOneAndUpdate({
      name: 'Mike'
    }, {
      $set : {
        name : 'Leslie'
      },
      $inc : {
        age : 1
      }
    }, {
      returnOriginal : false
    })
    .then((result) => {
      console.log(result);
    });

  // client.close();
});
