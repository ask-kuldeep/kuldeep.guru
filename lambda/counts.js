const firebase = require('firebase');
require('firebase/firestore');
const app = require('./app');

const db = firebase.firestore(app);

exports.handler = async (_event, _context, callback) => {
  let result;

  await db
    .collection('counter')
    .get()
    .then((data) => {
      const counts = data.docs
        .map((count) => count.data())
        .filter((count) => count.countable)
        .length.toString();

      result = callback(null, {
        statusCode: 200,
        body: JSON.stringify({ counts }),
      });
    });

  return result;
};
