import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCX378tQql0A782rjPUI1ShxnIatE0gxBI",
  authDomain: "dpm-sttnf.firebaseapp.com",
  projectId: "dpm-sttnf",
  storageBucket: "dpm-sttnf.appspot.com",
  messagingSenderId: "321651471173",
  appId: "1:321651471173:web:b165c71c36d1fbe284042c",
  measurementId: "G-3P8649HP0M",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// init timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
