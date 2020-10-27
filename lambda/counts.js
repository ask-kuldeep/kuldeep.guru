const firebase = require('firebase');
require('firebase/firestore');
const app = require('./app');

const db = firebase.firestore(app);

exports.handler = (_event, _context, callback) => {
  let result;

  db.collection('counter')
    .get()
    .then((data) => {
      const counts = data.docs
        .map((count) => count.data())
        .filter((count) => count.countable)
        .length.toString();

      result = JSON.stringify({ counts });
      callback(null, {
        statusCode: 200,
        body: result,
      });
    });
};
