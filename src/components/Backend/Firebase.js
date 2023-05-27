import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAA0xoiVx7RFv1CNiXX5KplRiwe82qpJb4",
  authDomain: "food-delivery-website-57819.firebaseapp.com",
  databaseURL:
    "https://food-delivery-website-57819-default-rtdb.firebaseio.com",
  projectId: "food-delivery-website-57819",
  storageBucket: "food-delivery-website-57819.appspot.com",
  messagingSenderId: "741450994501",
  appId: "1:741450994501:web:1a26bded77e6c5982e242c",
  measurementId: "G-7Z897JZ51J",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default db;
