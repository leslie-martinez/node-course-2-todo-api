//Object destructuring - ES6 Javascript
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos')
  //   .findOneAndDelete({
  //     completed: false
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .deleteMany({
      name: 'Andrew'
    })
    .then((result) => {
      console.log(result);
    }
  );

  db.collection('Users')
    .findOneAndDelete({
      _id: new ObjectID("5c1c98fadeceb24e108e7b1b")
    })
    .then((result) => {
      console.log(result);
    }
  );

  // client.close();
});
