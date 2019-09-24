 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth'

 // Your web app's Firebase configuration

    var firebaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    
    
      };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();// initialize the conection to database
  const auth = firebase.auth();
  export default {
      db,
      auth}
