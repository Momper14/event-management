 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth'

 // Your web app's Firebase configuration

    var firebaseConfig = {
        apiKey: "AIzaSyAIVbtA1U4FqLWvotCOlPHP_8eHM7IMZ8s",
        authDomain: "event-managment-30679.firebaseapp.com",
        databaseURL: "https://event-managment-30679.firebaseio.com",
        projectId: "event-managment-30679",
        storageBucket: "event-managment-30679.appspot.com",
        messagingSenderId: "275607799148",
        appId: "1:275607799148:web:da0d2e32a03b364edf1f49"
    
    
      };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();// initialize the conection to database
  const auth = firebase.auth();
  export default {
      db,
      auth}