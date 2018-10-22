import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAB-4zOwLlkczFdA5ilUtUrgSmozmUv3Po",
  authDomain: "newinfoplaner.firebaseapp.com",
  databaseURL: "https://newinfoplaner.firebaseio.com",
  projectId: "newinfoplaner",
  storageBucket: "",
  messagingSenderId: "410844463984"
};

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})
  export default firebase;