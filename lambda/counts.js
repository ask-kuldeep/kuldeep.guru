const firebase = require('firebase');
require('firebase/firestore');
const app = require('./app');

const db = firebase.firestore(app);

exports.handler = (_event, _context, callback) => {
  db.collection('counter')
    .get()
    .then((data) => {
      const counts = data.docs
        .map((count) => count.data())
        .filter((count) => count.countable)
        .length.toString();

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ counts }),
      });
    });
};
