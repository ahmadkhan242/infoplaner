import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "ID",
  storageBucket: "",
  messagingSenderId: "M_ID"
};

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})
  export default firebase;
