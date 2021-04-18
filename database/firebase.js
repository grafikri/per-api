const admin = require('firebase-admin');

const serviceAccount = require("./../assets/performanceapi-12536-firebase-adminsdk-l4u3l-54b970d9fb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://performanceapi-12536-default-rtdb.firebaseio.com"
});

const db = admin.database()

module.exports = db