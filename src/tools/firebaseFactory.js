import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHW5nAP2PyUqywyPfVC9ywF74HjIFJS3c",
  authDomain: "test-coderhouse.firebaseapp.com",
  databaseURL: "https://test-coderhouse.firebaseio.com",
  projectId: "test-coderhouse",
  storageBucket: "test-coderhouse.appspot.com",
  messagingSenderId: "865230655199",
  appId: "1:865230655199:web:d0cf1957023b58e2a8636a",
  measurementId: "G-763WETYSNR",
};

const FIREBASE_APP = firebase.initializeApp(firebaseConfig);
export const DB = firebase.firestore(FIREBASE_APP);
