// import React from 'react';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAg5ZObxwNFX8rSwyUp4U1NXubq4xnR7sM",
  authDomain: "f1-leaderboards.firebaseapp.com",
  databaseURL: "https://f1-leaderboards.firebaseio.com",
  projectId: "f1-leaderboards",
  storageBucket: "f1-leaderboards.appspot.com",
  messagingSenderId: "609558349750",
  appId: "1:609558349750:web:60d1a5f75eaea72110a317",
  measurementId: "G-F7QHLP92QY"
};

firebase.initializeApp(config)

// const withFirebaseHOC = Component => props => (
//   <FirebaseConsumer>
//     {state => <Component {...props} firebase={state} />}
//   </FirebaseConsumer>
// )


// export const FirebaseProvider = FirebaseContext.Provider;
// export const FirebaseConsumer = FirebaseContext.Consumer;
// export const withFirebaseHOC
export default firebase;
export const database = firebase.database();




// import app from 'firebase/app';
// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
// };
// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };
// const config =
//   process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
// }
// export default Firebase;