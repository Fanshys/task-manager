import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARHrKYVgU2LPbcOzv9k3D5I5El4_F_UZc",
  authDomain: "task-manager-669e8.firebaseapp.com",
  databaseURL: "https://task-manager-669e8.firebaseio.com",
  projectId: "task-manager-669e8",
  storageBucket: "task-manager-669e8.appspot.com",
  messagingSenderId: "51720276740",
  appId: "1:51720276740:web:07c6a73234fbbb52c45e51"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);