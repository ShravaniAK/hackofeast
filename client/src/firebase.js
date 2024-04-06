import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyABcX3Q9Z-isw1Vyj8rn1CrtbIWttKOOs4",
  authDomain: "hackofeast.firebaseapp.com",
  projectId: "hackofeast",
  storageBucket: "hackofeast.appspot.com",
  messagingSenderId: "312079421432",
  appId: "1:312079421432:web:19d8c0e14065f81c85d00d",
  measurementId: "G-73VL478QYY"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const storage = app.storage();
firebase.initializeApp(firebaseConfig);
firebase.firestore.setLogLevel('debug');
export default firebase;