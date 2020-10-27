const firebase = require('firebase');
require('firebase/firestore');
const app = require('./app');

const db = firebase.firestore(app);

exports.handler = async (_event, _context, callback) => {
  let result;

  await db
    .collection('counter')
    .add({
      countable: true,
    })
    .then(() => {
      result = '{ "success": true }';
    })
    .catch((error) => {
      result = JSON.stringify({ error });
    });

  return callback(null, { statusCode: 200, body: result });
};
