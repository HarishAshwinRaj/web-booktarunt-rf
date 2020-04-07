import firebase from"firebase/app"
import "firebase/firestore";
import "firebase/analytics";
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCMIYkTYVv7V8FboMtTI5Q74IbtgultfTY",
    authDomain: "booktarunt01.firebaseapp.com",
    databaseURL: "https://booktarunt01.firebaseio.com",
    projectId: "booktarunt01",
    storageBucket: "booktarunt01.appspot.com",
    messagingSenderId: "549847242770",
    appId: "1:549847242770:web:43eadf9bccd905ccf2a0cb",
    measurementId: "G-1KS9H7EQXB"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;



