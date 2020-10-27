const firebase = require('firebase');
require('firebase/firestore');
const app = require('./app');

const db = firebase.firestore(app);

exports.handler = async (_event, _context, callback) => {
  const data = await db.collection('counter').get();

  const counts = await data.docs
    .map((count) => count.data())
    .filter((count) => count.countable)
    .length.toString();

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ counts }),
  });
};
