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
      result = callback(null, { statusCode: 200, body: '{ "success": true }' });
    })
    .catch((error) => {
      result = callback(null, {
        statusCode: 200,
        body: JSON.stringify({ error }),
      });
    });

  return result;
};
