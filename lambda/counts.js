const firebase = require('firebase');
require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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

      result = JSON.stringify({ counts });
    });

  return callback(null, {
    statusCode: 200,
    body: result,
  });
};