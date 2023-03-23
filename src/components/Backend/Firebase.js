import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCe7wbavJeK_EaEyydDxE2yakHlfM2PYRY",
  authDomain: "food-webpage.firebaseapp.com",
  projectId: "food-webpage",
  storageBucket: "food-webpage.appspot.com",
  messagingSenderId: "82958820048",
  appId: "1:82958820048:web:b68d33cf7e8d096e55b4d5",
};

const firedb = firebase.initializeApp(firebaseConfig);
const database = firedb.database().ref();

export default database;
