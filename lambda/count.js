const firebase = require('firebase');
require('firebase/firestore');
const app = require('./app');

const db = firebase.firestore(app);

exports.handler = (_event, _context, callback) => {
  db.collection('counter')
    .add({
      countable: true,
    })
    .then(() => {
      callback(null, { statusCode: 200, body: '{ "success": true }' });
    })
    .catch((error) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ error }),
      });
    });
};
