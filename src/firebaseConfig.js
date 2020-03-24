import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAg5ZObxwNFX8rSwyUp4U1NXubq4xnR7sM",
  authDomain: "f1-leaderboards.firebaseapp.com",
  databaseURL: "https://f1-leaderboards.firebaseio.com",
  projectId: "f1-leaderboards",
  storageBucket: "f1-leaderboards.appspot.com",
  messagingSenderId: "609558349750",
  appId: "1:609558349750:web:60d1a5f75eaea72110a317",
  measurementId: "G-F7QHLP92QY"
};

firebase.initializeApp(firebaseConfig);

export default firebase;